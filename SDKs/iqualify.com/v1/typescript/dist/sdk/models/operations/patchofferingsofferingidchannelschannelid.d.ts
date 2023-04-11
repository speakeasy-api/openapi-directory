import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchOfferingsOfferingIdChannelsChannelIdRequest extends SpeakeasyBase {
    channel: shared.Channel;
    /**
     * channel's id
     */
    channelId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdChannelsChannelIdResponse extends SpeakeasyBase {
    /**
     * channel successfully updated
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
