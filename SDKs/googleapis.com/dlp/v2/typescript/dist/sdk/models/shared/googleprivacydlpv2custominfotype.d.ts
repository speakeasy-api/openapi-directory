import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DetectionRule } from "./googleprivacydlpv2detectionrule";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2StoredType } from "./googleprivacydlpv2storedtype";
/**
 * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
 */
export declare enum GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum {
    ExclusionTypeUnspecified = "EXCLUSION_TYPE_UNSPECIFIED",
    ExclusionTypeExclude = "EXCLUSION_TYPE_EXCLUDE"
}
/**
 * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.
 */
export declare enum GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
 */
export declare class GooglePrivacyDlpV2CustomInfoType extends SpeakeasyBase {
    /**
     * Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.
     */
    detectionRules?: GooglePrivacyDlpV2DetectionRule[];
    /**
     * Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
     */
    dictionary?: GooglePrivacyDlpV2Dictionary;
    /**
     * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
     */
    exclusionType?: GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
    /**
     * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.
     */
    likelihood?: GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
    /**
     * Message defining a custom regular expression.
     */
    regex?: GooglePrivacyDlpV2Regex;
    /**
     * A reference to a StoredInfoType to use with scanning.
     */
    storedType?: GooglePrivacyDlpV2StoredType;
    /**
     * Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`.
     */
    surrogateType?: Record<string, any>;
}
