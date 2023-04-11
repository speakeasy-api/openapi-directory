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
     * A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     */
    datacatalogProjectsLocationsEntryGroupsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse>;
    /**
     * Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse>;
    /**
     * Lists entries.
     */
    datacatalogProjectsLocationsEntryGroupsEntriesList(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse>;
    /**
     * Lists entry groups.
     */
    datacatalogProjectsLocationsEntryGroupsList(req: operations.DatacatalogProjectsLocationsEntryGroupsListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsListResponse>;
    /**
     * Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
     */
    datacatalogProjectsLocationsEntryGroupsTagsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse>;
    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     */
    datacatalogProjectsLocationsEntryGroupsTagsList(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest, security: operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse>;
    /**
     * Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     */
    datacatalogProjectsLocationsTagTemplatesCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse>;
    /**
     * Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     */
    datacatalogProjectsLocationsTagTemplatesFieldsCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse>;
    /**
     * Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
     */
    datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest, security: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse>;
    /**
     * Creates a taxonomy in the specified project.
     */
    datacatalogProjectsLocationsTaxonomiesCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse>;
    /**
     * Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
     */
    datacatalogProjectsLocationsTaxonomiesExport(req: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesExportResponse>;
    /**
     * Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
     */
    datacatalogProjectsLocationsTaxonomiesImport(req: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesImportResponse>;
    /**
     * Lists all taxonomies in a project in a particular location that the caller has permission to view.
     */
    datacatalogProjectsLocationsTaxonomiesList(req: operations.DatacatalogProjectsLocationsTaxonomiesListRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesListResponse>;
    /**
     * Creates a policy tag in the specified taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse>;
    /**
     * Deletes a policy tag. Also deletes all of its descendant policy tags.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse>;
    /**
     * Gets a policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse>;
    /**
     * Gets the IAM policy for a taxonomy or a policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse>;
    /**
     * Lists all policy tags in a taxonomy.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse>;
    /**
     * Updates a policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse>;
    /**
     * Sets the IAM policy for a taxonomy or a policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse>;
    /**
     * Returns the permissions that a caller has on the specified taxonomy or policy tag.
     */
    datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest, security: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse>;
}
