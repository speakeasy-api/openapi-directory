import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateVerificationCheckServerList: readonly ["https://verify.twilio.com"];
export declare class CreateVerificationCheckSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateVerificationCheckCreateVerificationCheckRequest extends SpeakeasyBase {
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    amount?: string;
    /**
     * The 4-10 character string being verified.
     */
    code?: string;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    payee?: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to?: string;
    /**
     * A SID that uniquely identifies the Verification Check. Either this parameter or the `to` phone number/[email](https://www.twilio.com/docs/verify/email) must be specified.
     */
    verificationSid?: string;
}
export declare class CreateVerificationCheckRequest extends SpeakeasyBase {
    requestBody?: CreateVerificationCheckCreateVerificationCheckRequest;
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateVerificationCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2ServiceVerificationCheck?: shared.VerifyV2ServiceVerificationCheck;
}
