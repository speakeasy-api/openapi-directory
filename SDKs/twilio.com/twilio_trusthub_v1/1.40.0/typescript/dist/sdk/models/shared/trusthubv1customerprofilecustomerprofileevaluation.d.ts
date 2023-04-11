import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfileEvaluationEnumStatusEnum } from "./customerprofileevaluationenumstatusenum";
/**
 * Created
 */
export declare class TrusthubV1CustomerProfileCustomerProfileEvaluation extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the customer_profile resource.
     */
    accountSid?: string;
    /**
     * The unique string that we created to identify the customer_profile resource.
     */
    customerProfileSid?: string;
    dateCreated?: Date;
    /**
     * The unique string of a policy that is associated to the customer_profile resource.
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
    status?: CustomerProfileEvaluationEnumStatusEnum;
    url?: string;
}
