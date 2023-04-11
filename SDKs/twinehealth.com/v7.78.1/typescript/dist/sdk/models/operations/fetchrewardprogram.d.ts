import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardProgramRequest extends SpeakeasyBase {
    /**
     * Reward program identifier
     */
    id: string;
}
export declare class FetchRewardProgramResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardProgramResponse?: shared.FetchRewardProgramResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
