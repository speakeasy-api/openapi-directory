import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetthermstateSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetthermstateRequest extends SpeakeasyBase {
    /**
     * The relay id
     */
    deviceId: string;
    /**
     * The thermostat id
     */
    moduleId: string;
}
export declare class GetthermstateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naThermStateResponse?: shared.NAThermStateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
