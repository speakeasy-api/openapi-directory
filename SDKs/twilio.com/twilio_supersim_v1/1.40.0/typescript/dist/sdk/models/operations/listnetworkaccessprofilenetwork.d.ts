import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class ListNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Network Access Profile resource.
     */
    networkAccessProfileSid: string;
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
export declare class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta extends SpeakeasyBase {
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
export declare class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    meta?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;
    networks?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[];
}
export declare class ListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listNetworkAccessProfileNetworkResponse?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
