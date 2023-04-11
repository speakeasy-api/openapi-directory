import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeviceCodeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetDeviceCodeRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the device code.
     */
    id: string;
}
export declare class GetDeviceCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDeviceCodeResponse?: shared.GetDeviceCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
