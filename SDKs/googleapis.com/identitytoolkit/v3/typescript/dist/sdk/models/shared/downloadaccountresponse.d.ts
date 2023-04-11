import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Response of downloading accounts in batch.
 */
export declare class DownloadAccountResponse extends SpeakeasyBase {
    /**
     * The fixed string "identitytoolkit#DownloadAccountResponse".
     */
    kind?: string;
    /**
     * The next page token. To be used in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * The user accounts data.
     */
    users?: UserInfo[];
}
