import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class ListConnectionPolicySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConnectionPolicyRequest extends SpeakeasyBase {
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
export declare class ListConnectionPolicyListConnectionPolicyResponseMeta extends SpeakeasyBase {
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
export declare class ListConnectionPolicyListConnectionPolicyResponse extends SpeakeasyBase {
    connectionPolicies?: shared.VoiceV1ConnectionPolicy[];
    meta?: ListConnectionPolicyListConnectionPolicyResponseMeta;
}
export declare class ListConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConnectionPolicyResponse?: ListConnectionPolicyListConnectionPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
