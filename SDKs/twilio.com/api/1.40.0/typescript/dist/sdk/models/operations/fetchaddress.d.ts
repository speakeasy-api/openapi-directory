import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAddressServerList: readonly ["https://api.twilio.com"];
export declare class FetchAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Address resource to fetch.
     */
    sid: string;
}
export declare class FetchAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
