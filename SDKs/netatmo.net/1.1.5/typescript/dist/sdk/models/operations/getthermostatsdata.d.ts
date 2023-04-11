import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetthermostatsdataSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetthermostatsdataRequest extends SpeakeasyBase {
    /**
     * Id of the device you want to retrieve information of
     */
    deviceId?: string;
}
export declare class GetthermostatsdataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naThermostatDataResponse?: shared.NAThermostatDataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
