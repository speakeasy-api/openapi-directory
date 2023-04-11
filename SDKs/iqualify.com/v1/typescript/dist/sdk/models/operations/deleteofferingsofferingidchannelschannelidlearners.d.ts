import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    requestBody: DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
    /**
     * channel's id
     */
    channelId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
