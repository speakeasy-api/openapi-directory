import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRewardProgramActivationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createRewardProgramActivationResponse?: shared.CreateRewardProgramActivationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
