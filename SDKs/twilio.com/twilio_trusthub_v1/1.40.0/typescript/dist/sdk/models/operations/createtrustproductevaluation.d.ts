import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTrustProductEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string of a policy that is associated to the customer_profile resource.
     */
    policySid: string;
}
export declare class CreateTrustProductEvaluationRequest extends SpeakeasyBase {
    requestBody?: CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;
    /**
     * The unique string that we created to identify the trust_product resource.
     */
    trustProductSid: string;
}
export declare class CreateTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
