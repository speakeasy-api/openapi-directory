import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPermissionAppsAppIdRequest extends SpeakeasyBase {
    /**
     * The id of the app
     */
    appId: string;
    /**
     * The time (in milliseconds) of when the user agreed to the access request
     */
    date?: number;
    /**
     * The ip address of the user agreeing to the access request
     */
    ip?: string;
    /**
     * The id of the user
     */
    userId: string;
}
export declare class PostPermissionAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
