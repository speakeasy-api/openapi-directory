import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeployedDevicesDeviceRequest extends SpeakeasyBase {
    /**
     * Filters the resulting list of Devices by a unique string identifier of the Deployment they are associated with.
     */
    deploymentSid?: string;
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
export declare class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta extends SpeakeasyBase {
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
export declare class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse extends SpeakeasyBase {
    devices?: shared.PreviewDeployedDevicesFleetDevice[];
    meta?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}
export declare class ListDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeployedDevicesDeviceResponse?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
