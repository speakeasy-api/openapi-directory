import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the parameters of human assist query.
 */
export declare class GoogleCloudDialogflowV2beta1AssistQueryParameters extends SpeakeasyBase {
    /**
     * Key-value filters on the metadata of documents returned by article suggestion. If specified, article suggestion only returns suggested documents that match all filters in their Document.metadata. Multiple values for a metadata key should be concatenated by comma. For example, filters to match all documents that have 'US' or 'CA' in their market metadata values and 'agent' in their user metadata values will be ``` documents_metadata_filters { key: "market" value: "US,CA" } documents_metadata_filters { key: "user" value: "agent" } ```
     */
    documentsMetadataFilters?: Record<string, string>;
}
