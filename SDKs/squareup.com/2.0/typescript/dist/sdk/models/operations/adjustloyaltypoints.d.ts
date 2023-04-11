import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdjustLoyaltyPointsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AdjustLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    adjustLoyaltyPointsRequest: shared.AdjustLoyaltyPointsRequest;
    /**
     * The ID of the [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) in which to adjust the points.
     */
    accountId: string;
}
export declare class AdjustLoyaltyPointsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adjustLoyaltyPointsResponse?: shared.AdjustLoyaltyPointsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
