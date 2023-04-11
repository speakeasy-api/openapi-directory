import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    /**
     * Provides a URL encoded representation of the public certificate in PEM format.
     */
    certificateData: string;
    /**
     * Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
     */
    deviceSid?: string;
    /**
     * Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class CreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
}
export declare class CreateDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
