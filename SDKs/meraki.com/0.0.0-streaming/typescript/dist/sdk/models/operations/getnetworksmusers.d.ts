import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUsersRequest extends SpeakeasyBase {
    /**
     * Filter users by email(s). Multiple emails can be passed in as comma separated values.
     */
    emails?: string;
    /**
     * Filter users by id(s). Multiple ids can be passed in as comma separated values.
     */
    ids?: string;
    networkId: string;
    /**
     * Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags as comma separated values.
     */
    scope?: string;
    /**
     * Filter users by username(s). Multiple usernames can be passed in as comma separated values.
     */
    usernames?: string;
}
export declare class GetNetworkSmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUsers200ApplicationJSONObjects?: Record<string, any>[];
}
