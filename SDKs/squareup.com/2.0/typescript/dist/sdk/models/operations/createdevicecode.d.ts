import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDeviceCodeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateDeviceCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDeviceCodeResponse?: shared.CreateDeviceCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
