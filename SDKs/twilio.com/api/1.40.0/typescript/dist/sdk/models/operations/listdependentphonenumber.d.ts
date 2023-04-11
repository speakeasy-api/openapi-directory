import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDependentPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class ListDependentPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDependentPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the DependentPhoneNumber resources to read.
     */
    accountSid: string;
    /**
     * The SID of the Address resource associated with the phone number.
     */
    addressSid: string;
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
export declare class ListDependentPhoneNumberListDependentPhoneNumberResponse extends SpeakeasyBase {
    dependentPhoneNumbers?: shared.ApiV2010AccountAddressDependentPhoneNumber[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListDependentPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDependentPhoneNumberResponse?: ListDependentPhoneNumberListDependentPhoneNumberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
