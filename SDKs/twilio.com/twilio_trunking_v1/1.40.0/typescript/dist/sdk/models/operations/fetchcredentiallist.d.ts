import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CredentialList resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to fetch the credential list.
     */
    trunkSid: string;
}
export declare class FetchCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
