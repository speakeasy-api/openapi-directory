import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains various matching options for values for a GCP resource field.
 */
export declare class GoogleCloudRecommenderV1beta1ValueMatcher extends SpeakeasyBase {
    /**
     * To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch
     */
    matchesPattern?: string;
}
