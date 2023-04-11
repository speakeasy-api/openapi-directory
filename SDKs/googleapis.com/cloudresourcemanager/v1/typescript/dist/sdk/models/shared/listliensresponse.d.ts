import { SpeakeasyBase } from "../../../internal/utils";
import { Lien } from "./lien";
/**
 * The response message for Liens.ListLiens.
 */
export declare class ListLiensResponse extends SpeakeasyBase {
    /**
     * A list of Liens.
     */
    liens?: Lien[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
