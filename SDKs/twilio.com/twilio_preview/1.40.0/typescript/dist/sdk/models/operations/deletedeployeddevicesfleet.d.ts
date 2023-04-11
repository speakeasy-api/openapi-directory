import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeployedDevicesFleetRequest extends SpeakeasyBase {
    /**
     * Provides a 34 character string that uniquely identifies the requested Fleet resource.
     */
    sid: string;
}
export declare class DeleteDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
