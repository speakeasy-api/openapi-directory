import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePermissionAppsAppIdRequest extends SpeakeasyBase {
    /**
     * The id of the app
     */
    appId: string;
    /**
     * The id of the user
     */
    userId: string;
}
export declare class DeletePermissionAppsAppIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
