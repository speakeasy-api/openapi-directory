import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Deployment resource.
     */
    sid: string;
}
export declare class FetchDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
