import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListPhoneNumberCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class ListPhoneNumberCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListPhoneNumberCountryRequest extends SpeakeasyBase {
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
export declare class ListPhoneNumberCountryListPhoneNumberCountryResponseMeta extends SpeakeasyBase {
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
export declare class ListPhoneNumberCountryListPhoneNumberCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV1PhoneNumberPhoneNumberCountry[];
    meta?: ListPhoneNumberCountryListPhoneNumberCountryResponseMeta;
}
export declare class ListPhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listPhoneNumberCountryResponse?: ListPhoneNumberCountryListPhoneNumberCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
