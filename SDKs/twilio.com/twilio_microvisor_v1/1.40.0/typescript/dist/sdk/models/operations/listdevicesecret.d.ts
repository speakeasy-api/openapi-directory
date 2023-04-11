import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeviceSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class ListDeviceSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeviceSecretRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
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
export declare class ListDeviceSecretListDeviceSecretResponseMeta extends SpeakeasyBase {
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
export declare class ListDeviceSecretListDeviceSecretResponse extends SpeakeasyBase {
    meta?: ListDeviceSecretListDeviceSecretResponseMeta;
    secrets?: shared.MicrovisorV1DeviceDeviceSecret[];
}
export declare class ListDeviceSecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeviceSecretResponse?: ListDeviceSecretListDeviceSecretResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
