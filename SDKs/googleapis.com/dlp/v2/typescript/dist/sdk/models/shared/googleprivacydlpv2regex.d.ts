import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message defining a custom regular expression.
 */
export declare class GooglePrivacyDlpV2Regex extends SpeakeasyBase {
    /**
     * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
     */
    groupIndexes?: number[];
    /**
     * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
     */
    pattern?: string;
}
