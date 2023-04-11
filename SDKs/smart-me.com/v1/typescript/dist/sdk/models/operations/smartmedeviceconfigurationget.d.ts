import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SmartMeDeviceConfigurationGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class SmartMeDeviceConfigurationGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    smartMeDeviceConfigurationContainer?: shared.SmartMeDeviceConfigurationContainer;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
