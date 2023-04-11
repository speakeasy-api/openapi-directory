import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCustomerProfileEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCustomerProfileEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the customer_profile resource.
     */
    customerProfileSid: string;
    /**
     * The unique string that identifies the Evaluation resource.
     */
    sid: string;
}
export declare class FetchCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
