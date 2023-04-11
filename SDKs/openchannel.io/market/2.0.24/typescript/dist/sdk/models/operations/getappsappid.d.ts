import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsAppIdRequest extends SpeakeasyBase {
    /**
     * The id of the App to be located
     */
    appId: string;
    /**
     * Whether this call should be tracked as a 'view' for this app. Default is false.
     */
    trackViews?: boolean;
    /**
     * The unique id of the user that is requesting this resource
     */
    userId?: string;
}
export declare class GetAppsAppIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
