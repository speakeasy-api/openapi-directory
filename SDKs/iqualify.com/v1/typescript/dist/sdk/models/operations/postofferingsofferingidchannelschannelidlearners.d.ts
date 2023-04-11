import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    requestBody: PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
    /**
     * channel's id
     */
    channelId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
