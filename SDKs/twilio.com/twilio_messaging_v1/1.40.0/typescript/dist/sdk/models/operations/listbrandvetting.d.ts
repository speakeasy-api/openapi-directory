import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBrandVettingServerList: readonly ["https://messaging.twilio.com"];
export declare class ListBrandVettingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBrandVettingRequest extends SpeakeasyBase {
    /**
     * The SID of the Brand Registration resource of the vettings to read .
     */
    brandSid: string;
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
    /**
     * The third-party provider of the vettings to read
     */
    vettingProvider?: shared.BrandVettingEnumVettingProviderEnum;
}
export declare class ListBrandVettingListBrandVettingResponseMeta extends SpeakeasyBase {
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
export declare class ListBrandVettingListBrandVettingResponse extends SpeakeasyBase {
    data?: shared.MessagingV1BrandRegistrationsBrandVetting[];
    meta?: ListBrandVettingListBrandVettingResponseMeta;
}
export declare class ListBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBrandVettingResponse?: ListBrandVettingListBrandVettingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
