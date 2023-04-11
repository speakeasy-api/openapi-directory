import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeployedDevicesKeyRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Key credential resource.
     */
    sid: string;
}
export declare class DeleteDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
