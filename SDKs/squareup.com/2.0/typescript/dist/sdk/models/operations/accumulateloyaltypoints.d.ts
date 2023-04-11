import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccumulateLoyaltyPointsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AccumulateLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    accumulateLoyaltyPointsRequest: shared.AccumulateLoyaltyPointsRequest;
    /**
     * The [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) ID to which to add the points.
     */
    accountId: string;
}
export declare class AccumulateLoyaltyPointsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accumulateLoyaltyPointsResponse?: shared.AccumulateLoyaltyPointsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
