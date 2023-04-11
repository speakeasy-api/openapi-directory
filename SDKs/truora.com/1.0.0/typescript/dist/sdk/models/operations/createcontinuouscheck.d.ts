import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    continuousCheck?: shared.ContinuousCheck;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
