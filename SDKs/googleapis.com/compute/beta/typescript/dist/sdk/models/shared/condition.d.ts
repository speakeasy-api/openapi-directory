import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum ConditionIamEnum {
    Approver = "APPROVER",
    Attribution = "ATTRIBUTION",
    Authority = "AUTHORITY",
    CredentialsType = "CREDENTIALS_TYPE",
    CredsAssertion = "CREDS_ASSERTION",
    JustificationType = "JUSTIFICATION_TYPE",
    NoAttr = "NO_ATTR",
    SecurityRealm = "SECURITY_REALM"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum ConditionOpEnum {
    Discharged = "DISCHARGED",
    Equals = "EQUALS",
    In = "IN",
    NotEquals = "NOT_EQUALS",
    NotIn = "NOT_IN",
    NoOp = "NO_OP"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum ConditionSysEnum {
    Ip = "IP",
    Name = "NAME",
    NoAttr = "NO_ATTR",
    Region = "REGION",
    Service = "SERVICE"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare class Condition extends SpeakeasyBase {
    /**
     * This is deprecated and has no effect. Do not use.
     */
    iam?: ConditionIamEnum;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    op?: ConditionOpEnum;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    svc?: string;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    sys?: ConditionSysEnum;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    values?: string[];
}
