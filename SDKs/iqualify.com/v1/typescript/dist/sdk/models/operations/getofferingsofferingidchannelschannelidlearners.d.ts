import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    /**
     * channel's id
     */
    channelId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    /**
     * channel data
     */
    channelResponse?: shared.ChannelResponse;
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
