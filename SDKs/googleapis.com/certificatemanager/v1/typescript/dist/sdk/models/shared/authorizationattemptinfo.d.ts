import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Reason for failure of the authorization attempt for the domain.
 */
export declare enum AuthorizationAttemptInfoFailureReasonEnum {
    FailureReasonUnspecified = "FAILURE_REASON_UNSPECIFIED",
    Config = "CONFIG",
    Caa = "CAA",
    RateLimited = "RATE_LIMITED"
}
/**
 * Output only. State of the domain for managed certificate issuance.
 */
export declare enum AuthorizationAttemptInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Authorizing = "AUTHORIZING",
    Authorized = "AUTHORIZED",
    Failed = "FAILED"
}
/**
 * State of the latest attempt to authorize a domain for certificate issuance.
 */
export declare class AuthorizationAttemptInfo extends SpeakeasyBase {
    /**
     * Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum.
     */
    details?: string;
    /**
     * Domain name of the authorization attempt.
     */
    domain?: string;
    /**
     * Output only. Reason for failure of the authorization attempt for the domain.
     */
    failureReason?: AuthorizationAttemptInfoFailureReasonEnum;
    /**
     * Output only. State of the domain for managed certificate issuance.
     */
    state?: AuthorizationAttemptInfoStateEnum;
}
