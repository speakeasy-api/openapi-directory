import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
 */
export declare enum TagSettingKeywordOptionEnum {
    PlaceholderWithListOfKeywords = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS",
    Ignore = "IGNORE",
    GenerateSeparateTagForEachKeyword = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
}
/**
 * Tag Settings
 */
export declare class TagSetting extends SpeakeasyBase {
    /**
     * Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
     */
    additionalKeyValues?: string;
    /**
     * Whether static landing page URLs should be included in the tags. This setting applies only to placements.
     */
    includeClickThroughUrls?: boolean;
    /**
     * Whether click-tracking string should be included in the tags.
     */
    includeClickTracking?: boolean;
    /**
     * Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
     */
    keywordOption?: TagSettingKeywordOptionEnum;
}
