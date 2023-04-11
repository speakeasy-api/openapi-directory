import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class ListNetworkAccessProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListNetworkAccessProfileRequest extends SpeakeasyBase {
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
export declare class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta extends SpeakeasyBase {
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
export declare class ListNetworkAccessProfileListNetworkAccessProfileResponse extends SpeakeasyBase {
    meta?: ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;
    networkAccessProfiles?: shared.SupersimV1NetworkAccessProfile[];
}
export declare class ListNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listNetworkAccessProfileResponse?: ListNetworkAccessProfileListNetworkAccessProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
