import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    /**
     * Specifies the unique string identifier of the Deployment group that this Device is going to be associated with.
     */
    deploymentSid?: string;
    enabled?: boolean;
    /**
     * Provides a human readable descriptive text to be assigned to this Device, up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * Provides an arbitrary string identifier representing a human user to be associated with this Device, up to 256 characters long.
     */
    identity?: string;
}
export declare class UpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;
    /**
     * Provides a 34 character string that uniquely identifies the requested Device resource.
     */
    sid: string;
}
export declare class UpdateDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
