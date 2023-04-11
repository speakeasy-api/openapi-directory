import { SpeakeasyBase } from "../../../internal/utils";
import { JsonPathMatcher } from "./jsonpathmatcher";
/**
 * The type of content matcher that will be applied to the server output, compared to the content string when the check is run.
 */
export declare enum ContentMatcherMatcherEnum {
    ContentMatcherOptionUnspecified = "CONTENT_MATCHER_OPTION_UNSPECIFIED",
    ContainsString = "CONTAINS_STRING",
    NotContainsString = "NOT_CONTAINS_STRING",
    MatchesRegex = "MATCHES_REGEX",
    NotMatchesRegex = "NOT_MATCHES_REGEX",
    MatchesJsonPath = "MATCHES_JSON_PATH",
    NotMatchesJsonPath = "NOT_MATCHES_JSON_PATH"
}
/**
 * Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
 */
export declare class ContentMatcher extends SpeakeasyBase {
    /**
     * String, regex or JSON content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed.
     */
    content?: string;
    /**
     * Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
     */
    jsonPathMatcher?: JsonPathMatcher;
    /**
     * The type of content matcher that will be applied to the server output, compared to the content string when the check is run.
     */
    matcher?: ContentMatcherMatcherEnum;
}
