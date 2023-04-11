import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP domain.
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
export declare class ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAccessControlListMappings?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipIpAccessControlListMappingResponse?: ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
