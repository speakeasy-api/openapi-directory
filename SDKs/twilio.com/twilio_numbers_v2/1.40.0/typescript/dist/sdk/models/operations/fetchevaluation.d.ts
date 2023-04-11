import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEvaluationServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
    /**
     * The unique string that identifies the Evaluation resource.
     */
    sid: string;
}
export declare class FetchEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceBundleEvaluation?: shared.NumbersV2RegulatoryComplianceBundleEvaluation;
}
