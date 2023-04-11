import { SpeakeasyBase } from "../../../internal/utils";
import { Css } from "./css";
/**
 * The response message for the `ListCsses` method
 */
export declare class ListCssesResponse extends SpeakeasyBase {
    /**
     * The CSS domains affiliated with the specified CSS group.
     */
    csses?: Css[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
