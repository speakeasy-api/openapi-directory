import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipAuthCallsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to read.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that contains the resources to read.
     */
    domainSid: string;
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
/**
 * OK
 */
export declare class ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipAuthCallsCredentialListMappingResponse?: ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
