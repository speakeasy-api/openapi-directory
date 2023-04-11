import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse extends SpeakeasyBase {
    /**
     * Offering activity attempt open responses
     */
    activityAttemptOpenResponses?: shared.ActivityAttemptOpenResponse[];
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
