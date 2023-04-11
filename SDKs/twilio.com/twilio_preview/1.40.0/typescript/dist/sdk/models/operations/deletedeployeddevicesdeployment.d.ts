import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Deployment resource.
     */
    sid: string;
}
export declare class DeleteDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
