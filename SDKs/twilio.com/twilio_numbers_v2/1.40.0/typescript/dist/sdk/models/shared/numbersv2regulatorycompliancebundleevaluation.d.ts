import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationEnumStatusEnum } from "./evaluationenumstatusenum";
/**
 * Created
 */
export declare class NumbersV2RegulatoryComplianceBundleEvaluation extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
     */
    accountSid?: string;
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid?: string;
    dateCreated?: Date;
    /**
     * The unique string of a regulation that is associated to the Bundle resource.
     */
    regulationSid?: string;
    /**
     * The results of the Evaluation which includes the valid and invalid attributes.
     */
    results?: any[];
    /**
     * The unique string that identifies the Evaluation resource.
     */
    sid?: string;
    status?: EvaluationEnumStatusEnum;
    url?: string;
}
