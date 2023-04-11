import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVerificationServerList: readonly ["https://verify.twilio.com"];
export declare class FetchVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVerificationRequest extends SpeakeasyBase {
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Verification resource to fetch.
     */
    sid: string;
}
export declare class FetchVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
