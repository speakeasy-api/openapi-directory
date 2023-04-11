import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Trusted attributes supplied by the IAM system.
 */
export declare enum ConditionIamEnum {
    NoAttr = "NO_ATTR",
    Authority = "AUTHORITY",
    Attribution = "ATTRIBUTION",
    SecurityRealm = "SECURITY_REALM",
    Approver = "APPROVER",
    JustificationType = "JUSTIFICATION_TYPE",
    CredentialsType = "CREDENTIALS_TYPE",
    CredsAssertion = "CREDS_ASSERTION"
}
/**
 * An operator to apply the subject with.
 */
export declare enum ConditionOpEnum {
    NoOp = "NO_OP",
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    In = "IN",
    NotIn = "NOT_IN",
    Discharged = "DISCHARGED"
}
/**
 * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
 */
export declare enum ConditionSysEnum {
    NoAttr = "NO_ATTR",
    Region = "REGION",
    Service = "SERVICE",
    Name = "NAME",
    Ip = "IP"
}
/**
 * A condition to be met.
 */
export declare class Condition extends SpeakeasyBase {
    /**
     * Trusted attributes supplied by the IAM system.
     */
    iam?: ConditionIamEnum;
    /**
     * An operator to apply the subject with.
     */
    op?: ConditionOpEnum;
    /**
     * Trusted attributes discharged by the service.
     */
    svc?: string;
    /**
     * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
     */
    sys?: ConditionSysEnum;
    /**
     * The objects of the condition.
     */
    values?: string[];
}
