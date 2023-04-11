import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
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
    /**
     * Provides a unique and addressable name to be assigned to this Device, to be used in addition to SID, up to 128 characters long.
     */
    uniqueName?: string;
}
export declare class CreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    fleetSid: string;
    requestBody?: CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;
}
export declare class CreateDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
