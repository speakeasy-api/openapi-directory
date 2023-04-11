import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest extends SpeakeasyBase {
    /**
     * Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
     */
    deviceSid?: string;
    /**
     * Provides a human readable descriptive text for this Key credential, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class CreateDeployedDevicesKeyRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;
}
export declare class CreateDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
