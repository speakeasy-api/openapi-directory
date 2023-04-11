import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message defining a list of words or phrases to search for in the data.
 */
export declare class GooglePrivacyDlpV2WordList extends SpeakeasyBase {
    /**
     * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
     */
    words?: string[];
}
