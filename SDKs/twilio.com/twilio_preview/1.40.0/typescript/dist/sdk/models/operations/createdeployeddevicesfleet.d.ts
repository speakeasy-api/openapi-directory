import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest extends SpeakeasyBase {
    /**
     * Provides a human readable descriptive text for this Fleet, up to 256 characters long.
     */
    friendlyName?: string;
}
export declare class CreateDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
