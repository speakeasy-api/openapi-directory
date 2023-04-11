import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     */
    datacatalogProjectsLocationsEntryGroupsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse>;
    /**
     * Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse>;
    /**
     * Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesImport(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportResponse>;
    /**
     * Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesList(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse>;
    /**
     * Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse>;
    /**
     * Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse>;
    /**
     * Marks an Entry as starred by the current user. Starring information is private to each user.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesStar(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse>;
    /**
     * `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileResponse>;
    /**
     * Marks an Entry as NOT starred by the current user. Starring information is private to each user.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesUnstar(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse>;
    /**
     * Lists entry groups.
     */
    datacatalogProjectsLocationsEntryGroupsList(req: operations.DatacatalogProjectsLocationsEntryGroupsListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsListResponse>;
    /**
     * Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
     */
    datacatalogProjectsLocationsEntryGroupsTagsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse>;
    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     */
    datacatalogProjectsLocationsEntryGroupsTagsList(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datacatalogProjectsLocationsOperationsCancel(req: operations.DatacatalogProjectsLocationsOperationsCancelRequest, security: operations.DatacatalogProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datacatalogProjectsLocationsOperationsList(req: operations.DatacatalogProjectsLocationsOperationsListRequest, security: operations.DatacatalogProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsOperationsListResponse>;
    /**
     * Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     */
    datacatalogProjectsLocationsTagTemplatesCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse>;
    /**
     * Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     */
    datacatalogProjectsLocationsTagTemplatesFieldsCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse>;
    /**
     * Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
     */
    datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse>;
    /**
     * Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
     */
    datacatalogProjectsLocationsTaxonomiesCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse>;
    /**
     * Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
     */
    datacatalogProjectsLocationsTaxonomiesExport(req: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesExportResponse>;
    /**
     * Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
     */
    datacatalogProjectsLocationsTaxonomiesImport(req: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesImportResponse>;
    /**
     * Lists all taxonomies in a project in a particular location that you have a permission to view.
     */
    datacatalogProjectsLocationsTaxonomiesList(req: operations.DatacatalogProjectsLocationsTaxonomiesListRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesListResponse>;
    /**
     * Creates a policy tag in a taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse>;
    /**
     * Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse>;
    /**
     * Gets a policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse>;
    /**
     * Gets the IAM policy for a policy tag or a taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse>;
    /**
     * Lists all policy tags in a taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse>;
    /**
     * Updates a policy tag, including its display name, description, and parent policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse>;
    /**
     * Sets the IAM policy for a policy tag or a taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse>;
    /**
     * Returns your permissions on a specified policy tag or taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse>;
    /**
     * Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.
     */
    datacatalogProjectsLocationsTaxonomiesReplace(req: operations.DatacatalogProjectsLocationsTaxonomiesReplaceRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesReplaceSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesReplaceResponse>;
}
