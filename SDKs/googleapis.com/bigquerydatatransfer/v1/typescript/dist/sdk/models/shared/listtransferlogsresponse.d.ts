import { SpeakeasyBase } from "../../../internal/utils";
import { TransferMessage } from "./transfermessage";
/**
 * The returned list transfer run messages.
 */
export declare class ListTransferLogsResponse extends SpeakeasyBase {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
    /**
     * Output only. The stored pipeline transfer messages.
     */
    transferMessages?: TransferMessage[];
}
