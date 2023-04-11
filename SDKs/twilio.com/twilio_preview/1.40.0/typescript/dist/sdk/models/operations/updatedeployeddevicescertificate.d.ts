import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    /**
     * Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
     */
    deviceSid?: string;
    /**
     * Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;
    /**
     * Provides a 34 character string that uniquely identifies the requested Certificate credential resource.
     */
    sid: string;
}
export declare class UpdateDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
