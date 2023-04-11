import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdatePhoneNumberServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdatePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
}
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    requestBody?: UpdatePhoneNumberUpdatePhoneNumberRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resource to update.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the PhoneNumber resource to update.
     */
    sid: string;
}
export declare class UpdatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
