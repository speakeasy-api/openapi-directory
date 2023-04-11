import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRewardEarningFulfillmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createRewardEarningFulfillmentResponse?: shared.CreateRewardEarningFulfillmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
