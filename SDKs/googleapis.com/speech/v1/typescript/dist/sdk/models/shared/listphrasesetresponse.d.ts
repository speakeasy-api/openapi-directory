import { SpeakeasyBase } from "../../../internal/utils";
import { PhraseSet } from "./phraseset";
/**
 * Message returned to the client by the `ListPhraseSet` method.
 */
export declare class ListPhraseSetResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The phrase set.
     */
    phraseSets?: PhraseSet[];
}
