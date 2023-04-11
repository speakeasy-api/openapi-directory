import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeviceServerList: readonly ["https://microvisor.twilio.com"];
export declare class ListDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeviceRequest extends SpeakeasyBase {
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
export declare class ListDeviceListDeviceResponseMeta extends SpeakeasyBase {
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
export declare class ListDeviceListDeviceResponse extends SpeakeasyBase {
    devices?: shared.MicrovisorV1Device[];
    meta?: ListDeviceListDeviceResponseMeta;
}
export declare class ListDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeviceResponse?: ListDeviceListDeviceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
