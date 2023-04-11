import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeployedDevicesKeyRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Key credential resource.
     */
    sid: string;
}
export declare class FetchDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
