import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
    /**
     * Provides a string identifier of a Deployment that is going to be used as a default one for this Fleet.
     */
    defaultDeploymentSid?: string;
    /**
     * Provides a human readable descriptive text for this Fleet, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
    requestBody?: UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;
    /**
     * Provides a 34 character string that uniquely identifies the requested Fleet resource.
     */
    sid: string;
}
export declare class UpdateDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
