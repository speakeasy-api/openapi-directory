import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRewardProgramResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createRewardProgramResponse?: shared.CreateRewardProgramResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
