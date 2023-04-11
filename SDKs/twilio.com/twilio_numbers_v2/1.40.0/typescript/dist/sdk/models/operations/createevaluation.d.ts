import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateEvaluationServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Bundle resource.
     */
    bundleSid: string;
}
export declare class CreateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceBundleEvaluation?: shared.NumbersV2RegulatoryComplianceBundleEvaluation;
}
