import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
    /**
     * Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
     */
    deviceSid?: string;
    /**
     * Provides a human readable descriptive text for this Key credential, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
    /**
     * Provides a 34 character string that uniquely identifies the requested Key credential resource.
     */
    sid: string;
}
export declare class UpdateDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
