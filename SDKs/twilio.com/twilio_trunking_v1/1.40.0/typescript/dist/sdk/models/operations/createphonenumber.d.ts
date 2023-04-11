import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePhoneNumberServerList: readonly ["https://trunking.twilio.com"];
export declare class CreatePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Incoming Phone Number](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource) that you want to associate with the trunk.
     */
    phoneNumberSid: string;
}
export declare class CreatePhoneNumberRequest extends SpeakeasyBase {
    requestBody?: CreatePhoneNumberCreatePhoneNumberRequest;
    /**
     * The SID of the Trunk to associate the phone number with.
     */
    trunkSid: string;
}
export declare class CreatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trunkingV1TrunkPhoneNumber?: shared.TrunkingV1TrunkPhoneNumber;
}
