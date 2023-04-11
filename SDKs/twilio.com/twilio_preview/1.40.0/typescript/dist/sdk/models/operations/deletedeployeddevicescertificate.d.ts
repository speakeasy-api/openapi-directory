import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeployedDevicesCertificateRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Certificate credential resource.
     */
    sid: string;
}
export declare class DeleteDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
