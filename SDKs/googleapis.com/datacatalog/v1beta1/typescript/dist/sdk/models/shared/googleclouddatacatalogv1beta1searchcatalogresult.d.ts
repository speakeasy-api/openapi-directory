import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.
 */
export declare enum GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED",
    Entry = "ENTRY",
    TagTemplate = "TAG_TEMPLATE",
    EntryGroup = "ENTRY_GROUP"
}
/**
 * A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
 */
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogResult extends SpeakeasyBase {
    /**
     * The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId`
     */
    linkedResource?: string;
    /**
     * Last-modified timestamp of the entry from the managing system.
     */
    modifyTime?: string;
    /**
     * The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}`
     */
    relativeResourceName?: string;
    /**
     * Sub-type of the search result. This is a dot-delimited description of the resource's full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.
     */
    searchResultSubtype?: string;
    /**
     * Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.
     */
    searchResultType?: GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum;
}
