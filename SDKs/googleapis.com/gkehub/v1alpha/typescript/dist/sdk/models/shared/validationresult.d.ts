import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validator type to validate membership with.
 */
export declare enum ValidationResultValidatorEnum {
    ValidatorTypeUnspecified = "VALIDATOR_TYPE_UNSPECIFIED",
    MembershipId = "MEMBERSHIP_ID",
    CrossProjectPermission = "CROSS_PROJECT_PERMISSION"
}
/**
 * ValidationResults are results set by each validator running during ValidateCreateMembership.
 */
export declare class ValidationResult extends SpeakeasyBase {
    /**
     * Additional information for the validation.
     */
    result?: string;
    /**
     * Whether the validation is passed or not.
     */
    success?: boolean;
    /**
     * Validator type to validate membership with.
     */
    validator?: ValidationResultValidatorEnum;
}
