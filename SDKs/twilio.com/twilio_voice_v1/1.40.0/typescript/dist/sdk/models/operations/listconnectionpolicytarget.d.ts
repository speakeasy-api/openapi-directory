import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class ListConnectionPolicyTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConnectionPolicyTargetRequest extends SpeakeasyBase {
    /**
     * The SID of the Connection Policy from which to read the Targets.
     */
    connectionPolicySid: string;
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
export declare class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta extends SpeakeasyBase {
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
export declare class ListConnectionPolicyTargetListConnectionPolicyTargetResponse extends SpeakeasyBase {
    meta?: ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;
    targets?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[];
}
export declare class ListConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConnectionPolicyTargetResponse?: ListConnectionPolicyTargetListConnectionPolicyTargetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
