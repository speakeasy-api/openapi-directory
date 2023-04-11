import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetContinuousCheckRequest extends SpeakeasyBase {
    /**
     * ID resulting from calling CreateContinuousCheck
     */
    continuousCheckId: number;
}
export declare class GetContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    continuousCheck?: shared.ContinuousCheck;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
