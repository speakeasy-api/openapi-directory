import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInteractionRequest extends SpeakeasyBase {
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
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) to read the resources from.
     */
    sessionSid: string;
}
export declare class ListInteractionListInteractionResponseMeta extends SpeakeasyBase {
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
export declare class ListInteractionListInteractionResponse extends SpeakeasyBase {
    interactions?: shared.ProxyV1ServiceSessionInteraction[];
    meta?: ListInteractionListInteractionResponseMeta;
}
export declare class ListInteractionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInteractionResponse?: ListInteractionListInteractionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
