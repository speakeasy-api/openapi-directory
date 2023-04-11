import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class UpdateContinuousCheckRequest extends SpeakeasyBase {
    updateContinuousCheckInput: shared.UpdateContinuousCheckInput;
    /**
     * ID resulting from calling CreateContinuousCheck
     */
    continuousCheckId: number;
}
export declare class UpdateContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    continuousCheck?: shared.ContinuousCheck;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
