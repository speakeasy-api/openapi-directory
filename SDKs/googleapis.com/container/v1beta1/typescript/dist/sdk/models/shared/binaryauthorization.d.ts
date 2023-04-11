import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED.
 */
export declare enum BinaryAuthorizationEvaluationModeEnum {
    EvaluationModeUnspecified = "EVALUATION_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    ProjectSingletonPolicyEnforce = "PROJECT_SINGLETON_POLICY_ENFORCE"
}
/**
 * Configuration for Binary Authorization.
 */
export declare class BinaryAuthorization extends SpeakeasyBase {
    /**
     * This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored.
     */
    enabled?: boolean;
    /**
     * Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED.
     */
    evaluationMode?: BinaryAuthorizationEvaluationModeEnum;
}
