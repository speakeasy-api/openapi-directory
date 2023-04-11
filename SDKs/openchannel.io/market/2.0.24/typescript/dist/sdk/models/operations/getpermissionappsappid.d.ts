import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPermissionAppsAppIdRequest extends SpeakeasyBase {
    /**
     * The id of the app
     */
    appId: string;
    /**
     * The id of the user
     */
    userId: string;
}
export declare class GetPermissionAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
