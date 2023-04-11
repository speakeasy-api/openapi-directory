import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.
 */
export declare enum QueryHistoryRequestFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}
/**
 * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record.
 */
export declare class QueryHistoryRequest extends SpeakeasyBase {
    /**
     * The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.
     */
    formFactor?: QueryHistoryRequestFormFactorEnum;
    /**
     * The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: string[];
    /**
     * The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"
     */
    origin?: string;
    /**
     * The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"
     */
    url?: string;
}
