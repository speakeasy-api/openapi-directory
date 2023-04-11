import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListPhoneNumberServerList: readonly ["https://trunking.twilio.com"];
export declare class ListPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListPhoneNumberRequest extends SpeakeasyBase {
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
     * The SID of the Trunk from which to read the PhoneNumber resources.
     */
    trunkSid: string;
}
export declare class ListPhoneNumberListPhoneNumberResponseMeta extends SpeakeasyBase {
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
export declare class ListPhoneNumberListPhoneNumberResponse extends SpeakeasyBase {
    meta?: ListPhoneNumberListPhoneNumberResponseMeta;
    phoneNumbers?: shared.TrunkingV1TrunkPhoneNumber[];
}
export declare class ListPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listPhoneNumberResponse?: ListPhoneNumberListPhoneNumberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
