import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    /**
     * Provides a human readable descriptive text for this Deployment, up to 64 characters long
     */
    friendlyName?: string;
    /**
     * Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
     */
    syncServiceSid?: string;
}
export declare class UpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;
    /**
     * Provides a 34 character string that uniquely identifies the requested Deployment resource.
     */
    sid: string;
}
export declare class UpdateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
