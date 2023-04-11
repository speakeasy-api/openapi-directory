import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2WordList } from "./googleprivacydlpv2wordlist";
/**
 * Replace each input value with a value randomly selected from the dictionary.
 */
export declare class GooglePrivacyDlpV2ReplaceDictionaryConfig extends SpeakeasyBase {
    /**
     * Message defining a list of words or phrases to search for in the data.
     */
    wordList?: GooglePrivacyDlpV2WordList;
}
