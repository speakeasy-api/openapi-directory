import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createRewardResponse?: shared.CreateRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
