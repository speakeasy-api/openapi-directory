import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePhoneNumberServerList: readonly ["https://proxy.twilio.com"];
export declare class CreatePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * Whether the new phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
     */
    phoneNumber?: string;
    /**
     * The SID of a Twilio [IncomingPhoneNumber](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource) resource that represents the Twilio Number you would like to assign to your Proxy Service.
     */
    sid?: string;
}
export declare class CreatePhoneNumberRequest extends SpeakeasyBase {
    requestBody?: CreatePhoneNumberCreatePhoneNumberRequest;
    /**
     * The SID parent [Service](https://www.twilio.com/docs/proxy/api/service) resource of the new PhoneNumber resource.
     */
    serviceSid: string;
}
export declare class CreatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
