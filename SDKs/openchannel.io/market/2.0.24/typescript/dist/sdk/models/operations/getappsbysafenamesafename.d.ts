import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsBySafeNameSafeNameRequest extends SpeakeasyBase {
    /**
     * The safeName of the App to be located
     */
    safeName: string;
    /**
     * Whether this call should be tracked as a 'view' for this app. Default is false.
     */
    trackViews?: boolean;
    /**
     * The unique id of the user that is requesting this resource
     */
    userId?: string;
}
export declare class GetAppsBySafeNameSafeNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
