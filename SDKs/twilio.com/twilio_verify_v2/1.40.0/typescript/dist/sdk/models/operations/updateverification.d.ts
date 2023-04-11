import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateVerificationServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateVerificationUpdateVerificationRequest extends SpeakeasyBase {
    status: shared.VerificationEnumStatusEnum;
}
export declare class UpdateVerificationRequest extends SpeakeasyBase {
    requestBody?: UpdateVerificationUpdateVerificationRequest;
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Verification resource to update.
     */
    sid: string;
}
export declare class UpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
