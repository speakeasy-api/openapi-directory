import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListMessageInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMessageInteractionRequest extends SpeakeasyBase {
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
    /**
     * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) to read the resources from.
     */
    participantSid: string;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) to read the resources from.
     */
    sessionSid: string;
}
export declare class ListMessageInteractionListMessageInteractionResponseMeta extends SpeakeasyBase {
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
export declare class ListMessageInteractionListMessageInteractionResponse extends SpeakeasyBase {
    interactions?: shared.ProxyV1ServiceSessionParticipantMessageInteraction[];
    meta?: ListMessageInteractionListMessageInteractionResponseMeta;
}
export declare class ListMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMessageInteractionResponse?: ListMessageInteractionListMessageInteractionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
