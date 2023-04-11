import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain that includes the resource to read.
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
export declare class ListSipCredentialListMappingListSipCredentialListMappingResponse extends SpeakeasyBase {
    credentialListMappings?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipCredentialListMappingResponse?: ListSipCredentialListMappingListSipCredentialListMappingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
