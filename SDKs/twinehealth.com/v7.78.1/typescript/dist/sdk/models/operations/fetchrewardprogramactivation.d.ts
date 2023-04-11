import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardProgramActivationRequest extends SpeakeasyBase {
    /**
     * Reward program activation identifier
     */
    id: string;
}
export declare class FetchRewardProgramActivationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardProgramActivationResponse?: shared.FetchRewardProgramActivationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
