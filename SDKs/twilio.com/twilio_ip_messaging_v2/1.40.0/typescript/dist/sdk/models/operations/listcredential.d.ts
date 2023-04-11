import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCredentialServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCredentialRequest extends SpeakeasyBase {
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
export declare class ListCredentialListCredentialResponseMeta extends SpeakeasyBase {
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
export declare class ListCredentialListCredentialResponse extends SpeakeasyBase {
    credentials?: shared.IpMessagingV2Credential[];
    meta?: ListCredentialListCredentialResponseMeta;
}
export declare class ListCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCredentialResponse?: ListCredentialListCredentialResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
