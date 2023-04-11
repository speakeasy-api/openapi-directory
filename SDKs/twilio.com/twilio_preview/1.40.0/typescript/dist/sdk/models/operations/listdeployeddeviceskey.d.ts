import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeployedDevicesKeyRequest extends SpeakeasyBase {
    /**
     * Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
     */
    deviceSid?: string;
    fleetSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDeployedDevicesKeyListDeployedDevicesKeyResponse extends SpeakeasyBase {
    keys?: shared.PreviewDeployedDevicesFleetKey[];
    meta?: ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta;
}
export declare class ListDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeployedDevicesKeyResponse?: ListDeployedDevicesKeyListDeployedDevicesKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
