import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DataprocMetastore.RemoveIamPolicy.
 */
export declare class RemoveIamPolicyRequest extends SpeakeasyBase {
    /**
     * Optional. Removes IAM policy attached to database or table asynchronously when it is set. The default is false.
     */
    asynchronous?: boolean;
}
