import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class ListBrandRegistrationsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBrandRegistrationsRequest extends SpeakeasyBase {
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
export declare class ListBrandRegistrationsListBrandRegistrationsResponseMeta extends SpeakeasyBase {
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
export declare class ListBrandRegistrationsListBrandRegistrationsResponse extends SpeakeasyBase {
    data?: shared.MessagingV1BrandRegistrations[];
    meta?: ListBrandRegistrationsListBrandRegistrationsResponseMeta;
}
export declare class ListBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBrandRegistrationsResponse?: ListBrandRegistrationsListBrandRegistrationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
