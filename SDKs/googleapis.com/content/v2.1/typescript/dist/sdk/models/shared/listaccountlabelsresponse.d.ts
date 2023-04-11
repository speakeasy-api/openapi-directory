import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLabel } from "./accountlabel";
/**
 * Response message for the `ListAccountLabels` method.
 */
export declare class ListAccountLabelsResponse extends SpeakeasyBase {
    /**
     * The labels from the specified account.
     */
    accountLabels?: AccountLabel[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
