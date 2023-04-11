import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom attribute values that are either filterable or non-filterable.
 */
export declare class CustomAttribute extends SpeakeasyBase {
    /**
     * If the `filterable` flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false.
     */
    filterable?: boolean;
    /**
     * If the `keyword_searchable` flag is true, the keywords in custom fields are searchable by keyword match. If false, the values are not searchable by keyword match. Default is false.
     */
    keywordSearchable?: boolean;
    /**
     * Exactly one of string_values or long_values must be specified. This field is used to perform number range search. (`EQ`, `GT`, `GE`, `LE`, `LT`) over filterable `long_value`. Currently at most 1 long_values is supported.
     */
    longValues?: string[];
    /**
     * Exactly one of string_values or long_values must be specified. This field is used to perform a string match (`CASE_SENSITIVE_MATCH` or `CASE_INSENSITIVE_MATCH`) search. For filterable `string_value`s, a maximum total number of 200 values is allowed, with each `string_value` has a byte size of no more than 500B. For unfilterable `string_values`, the maximum total byte size of unfilterable `string_values` is 50KB. Empty string isn't allowed.
     */
    stringValues?: string[];
}
