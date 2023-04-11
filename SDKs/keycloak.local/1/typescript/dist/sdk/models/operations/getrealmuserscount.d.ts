import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersCountRequest extends SpeakeasyBase {
    /**
     * email filter
     */
    email?: string;
    /**
     * first name filter
     */
    firstName?: string;
    /**
     * last name filter
     */
    lastName?: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * arbitrary search string for all the fields below
     */
    search?: string;
    /**
     * username filter
     */
    username?: string;
}
export declare class GetRealmUsersCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmUsersCount2XXApplicationJSONInt32Integer?: number;
}
