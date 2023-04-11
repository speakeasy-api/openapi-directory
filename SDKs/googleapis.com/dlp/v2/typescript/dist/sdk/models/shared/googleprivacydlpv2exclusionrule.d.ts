import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2ExcludeByHotword } from "./googleprivacydlpv2excludebyhotword";
import { GooglePrivacyDlpV2ExcludeInfoTypes } from "./googleprivacydlpv2excludeinfotypes";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
/**
 * How the rule is applied, see MatchingType documentation for details.
 */
export declare enum GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum {
    MatchingTypeUnspecified = "MATCHING_TYPE_UNSPECIFIED",
    MatchingTypeFullMatch = "MATCHING_TYPE_FULL_MATCH",
    MatchingTypePartialMatch = "MATCHING_TYPE_PARTIAL_MATCH",
    MatchingTypeInverseMatch = "MATCHING_TYPE_INVERSE_MATCH"
}
/**
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
 */
export declare class GooglePrivacyDlpV2ExclusionRule extends SpeakeasyBase {
    /**
     * Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
     */
    dictionary?: GooglePrivacyDlpV2Dictionary;
    /**
     * The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.
     */
    excludeByHotword?: GooglePrivacyDlpV2ExcludeByHotword;
    /**
     * List of excluded infoTypes.
     */
    excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;
    /**
     * How the rule is applied, see MatchingType documentation for details.
     */
    matchingType?: GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
    /**
     * Message defining a custom regular expression.
     */
    regex?: GooglePrivacyDlpV2Regex;
}
