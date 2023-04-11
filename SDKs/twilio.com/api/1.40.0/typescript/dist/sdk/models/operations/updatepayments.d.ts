import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdatePaymentsServerList: readonly ["https://api.twilio.com"];
export declare class UpdatePaymentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdatePaymentsUpdatePaymentsRequest extends SpeakeasyBase {
    capture?: shared.PaymentsEnumCaptureEnum;
    /**
     * A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated.
     */
    idempotencyKey: string;
    status?: shared.PaymentsEnumStatusEnum;
    /**
     * Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [Update](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-update) and [Complete/Cancel](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-cancelcomplete) POST requests.
     */
    statusCallback: string;
}
export declare class UpdatePaymentsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will update the resource.
     */
    accountSid: string;
    /**
     * The SID of the call that will update the resource. This should be the same call sid that was used to create payments resource.
     */
    callSid: string;
    requestBody?: UpdatePaymentsUpdatePaymentsRequest;
    /**
     * The SID of Payments session that needs to be updated.
     */
    sid: string;
}
export declare class UpdatePaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
