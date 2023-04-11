import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2LargeCustomDictionaryConfig } from "./googleprivacydlpv2largecustomdictionaryconfig";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
/**
 * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
 */
export declare class GooglePrivacyDlpV2StoredInfoTypeConfig extends SpeakeasyBase {
    /**
     * Description of the StoredInfoType (max 256 characters).
     */
    description?: string;
    /**
     * Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
     */
    dictionary?: GooglePrivacyDlpV2Dictionary;
    /**
     * Display name of the StoredInfoType (max 256 characters).
     */
    displayName?: string;
    /**
     * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
     */
    largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;
    /**
     * Message defining a custom regular expression.
     */
    regex?: GooglePrivacyDlpV2Regex;
}
