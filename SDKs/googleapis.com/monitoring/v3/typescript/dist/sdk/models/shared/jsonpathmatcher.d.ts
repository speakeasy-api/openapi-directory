import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content)
 */
export declare enum JsonPathMatcherJsonMatcherEnum {
    JsonPathMatcherOptionUnspecified = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED",
    ExactMatch = "EXACT_MATCH",
    RegexMatch = "REGEX_MATCH"
}
/**
 * Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
 */
export declare class JsonPathMatcher extends SpeakeasyBase {
    /**
     * The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content)
     */
    jsonMatcher?: JsonPathMatcherJsonMatcherEnum;
    /**
     * JSONPath within the response output pointing to the expected ContentMatcher::content to match against.
     */
    jsonPath?: string;
}
