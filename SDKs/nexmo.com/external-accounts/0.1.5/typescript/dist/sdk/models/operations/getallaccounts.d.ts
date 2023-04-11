import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllAccountsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
/**
 * Filter by provider
 */
export declare enum GetAllAccountsProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class GetAllAccountsRequest extends SpeakeasyBase {
    /**
     * Page number of the results
     */
    pageNumber?: number;
    /**
     * Page size of the results
     */
    pageSize?: number;
    /**
     * Filter by provider
     */
    provider?: GetAllAccountsProviderEnum;
}
export declare class GetAllAccounts200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJSONLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJSONLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJSONLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJSONLinks extends SpeakeasyBase {
    first?: GetAllAccounts200ApplicationJSONLinksFirst;
    last?: GetAllAccounts200ApplicationJSONLinksLast;
    next?: GetAllAccounts200ApplicationJSONLinksNext;
    prev?: GetAllAccounts200ApplicationJSONLinksPrev;
    self?: GetAllAccounts200ApplicationJSONLinksSelf;
}
/**
 * OK.
 */
export declare class GetAllAccounts200ApplicationJSON extends SpeakeasyBase {
    embedded?: shared.GetAllAccountResponse[];
    links?: GetAllAccounts200ApplicationJSONLinks;
    pageNumber?: number;
    pageSize?: number;
}
export declare class GetAllAccountsResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    /**
     * OK.
     */
    getAllAccounts200ApplicationJSONObject?: GetAllAccounts200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
