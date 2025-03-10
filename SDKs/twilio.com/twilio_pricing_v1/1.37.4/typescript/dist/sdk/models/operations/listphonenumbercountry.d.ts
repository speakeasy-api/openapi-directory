import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListPhoneNumberCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class ListPhoneNumberCountryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListPhoneNumberCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
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
export declare class ListPhoneNumberCountryListPhoneNumberCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV1PhoneNumberPhoneNumberCountry[];
    meta?: ListPhoneNumberCountryListPhoneNumberCountryResponseMeta;
}
export declare class ListPhoneNumberCountryRequest extends SpeakeasyBase {
    serverURL?: string;
    queryParams: ListPhoneNumberCountryQueryParams;
    security: ListPhoneNumberCountrySecurity;
}
export declare class ListPhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    listPhoneNumberCountryResponse?: ListPhoneNumberCountryListPhoneNumberCountryResponse;
    statusCode: number;
}
