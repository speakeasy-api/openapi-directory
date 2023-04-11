import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
    channelRequired: shared.ChannelRequired;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
    /**
     * channel successfully added
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
