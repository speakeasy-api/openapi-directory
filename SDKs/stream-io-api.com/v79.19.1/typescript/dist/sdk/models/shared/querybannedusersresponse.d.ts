import { SpeakeasyBase } from "../../../internal/utils";
import { BanResponse } from "./banresponse";
/**
 * Successful response
 */
export declare class QueryBannedUsersResponse extends SpeakeasyBase {
    bans: BanResponse[];
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
