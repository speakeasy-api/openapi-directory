import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The credential list Sid that uniquely identifies this resource
     */
    sid: string;
}
export declare class FetchSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}
