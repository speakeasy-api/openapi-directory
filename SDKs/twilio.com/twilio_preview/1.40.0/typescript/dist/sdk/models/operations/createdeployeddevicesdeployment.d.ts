import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    /**
     * Provides a human readable descriptive text for this Deployment, up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
     */
    syncServiceSid?: string;
}
export declare class CreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;
}
export declare class CreateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
