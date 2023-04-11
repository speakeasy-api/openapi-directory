import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest extends SpeakeasyBase {
    /**
     * channel's id
     */
    channelId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    comments?: shared.Comment[];
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
