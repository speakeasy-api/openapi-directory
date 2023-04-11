import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeployedDevicesFleetRequest extends SpeakeasyBase {
    /**
     * Provides a 34 character string that uniquely identifies the requested Fleet resource.
     */
    sid: string;
}
export declare class FetchDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
