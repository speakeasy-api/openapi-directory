import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAvailablePhoneNumberCountryServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resources.
     */
    accountSid: string;
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
export declare class ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    countries?: shared.ApiV2010AccountAvailablePhoneNumberCountry[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAvailablePhoneNumberCountryResponse?: ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
