import { SpeakeasyBase } from "../../../internal/utils";
import { TrustProductEvaluationEnumStatusEnum } from "./trustproductevaluationenumstatusenum";
/**
 * Created
 */
export declare class TrusthubV1TrustProductTrustProductEvaluation extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the trust_product resource.
     */
    accountSid?: string;
    dateCreated?: Date;
    /**
     * The unique string of a policy that is associated to the trust_product resource.
     */
    policySid?: string;
    /**
     * The results of the Evaluation which includes the valid and invalid attributes.
     */
    results?: any[];
    /**
     * The unique string that identifies the Evaluation resource.
     */
    sid?: string;
    status?: TrustProductEvaluationEnumStatusEnum;
    /**
     * The unique string that we created to identify the trust_product resource.
     */
    trustProductSid?: string;
    url?: string;
}
