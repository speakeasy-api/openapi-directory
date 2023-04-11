import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInteractionChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInteractionChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInteractionChannelRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListInteractionChannelListInteractionChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListInteractionChannelListInteractionChannelResponse extends SpeakeasyBase {
    channels?: shared.FlexV1InteractionInteractionChannel[];
    meta?: ListInteractionChannelListInteractionChannelResponseMeta;
}
export declare class ListInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInteractionChannelResponse?: ListInteractionChannelListInteractionChannelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
