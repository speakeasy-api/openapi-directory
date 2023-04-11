import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountValidationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the Caller ID.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Caller ID is associated with.
     */
    callSid?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The 6 digit validation code that someone must enter to validate the Caller ID  when `phone_number` is called.
     */
    validationCode?: string;
}
