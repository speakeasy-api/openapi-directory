import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeployedDevicesCertificateRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Certificate credential resource.
     */
    sid: string;
}
export declare class FetchDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
