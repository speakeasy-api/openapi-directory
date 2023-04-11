import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GethomecoachsdataSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GethomecoachsdataRequest extends SpeakeasyBase {
    /**
     * Id of the device you want to retrieve information of
     */
    deviceId?: string;
}
export declare class GethomecoachsdataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naHealthyHomeCoachDataResponse?: shared.NAHealthyHomeCoachDataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
