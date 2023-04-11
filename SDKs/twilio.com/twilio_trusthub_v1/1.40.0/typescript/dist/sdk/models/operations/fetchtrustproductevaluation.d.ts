import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrustProductEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchTrustProductEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrustProductEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Evaluation resource.
     */
    sid: string;
    /**
     * The unique string that we created to identify the trust_product resource.
     */
    trustProductSid: string;
}
export declare class FetchTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
