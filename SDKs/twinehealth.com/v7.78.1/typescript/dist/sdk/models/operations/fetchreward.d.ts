import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardRequest extends SpeakeasyBase {
    /**
     * Reward identifier
     */
    id: string;
}
export declare class FetchRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardResponse?: shared.FetchRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
