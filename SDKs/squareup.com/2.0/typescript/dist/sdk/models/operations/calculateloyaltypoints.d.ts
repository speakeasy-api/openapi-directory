import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalculateLoyaltyPointsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CalculateLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    calculateLoyaltyPointsRequest: shared.CalculateLoyaltyPointsRequest;
    /**
     * The [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram) ID, which defines the rules for accruing points.
     */
    programId: string;
}
export declare class CalculateLoyaltyPointsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calculateLoyaltyPointsResponse?: shared.CalculateLoyaltyPointsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
