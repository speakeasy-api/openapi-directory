import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines what happens to the task upon failure.
 */
export declare enum GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum {
    RetryStrategyUnspecified = "RETRY_STRATEGY_UNSPECIFIED",
    Ignore = "IGNORE",
    None = "NONE",
    Fatal = "FATAL",
    FixedInterval = "FIXED_INTERVAL",
    LinearBackoff = "LINEAR_BACKOFF",
    ExponentialBackoff = "EXPONENTIAL_BACKOFF",
    RestartIntegrationWithBackoff = "RESTART_INTEGRATION_WITH_BACKOFF"
}
/**
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
 */
export declare class GoogleCloudIntegrationsV1alphaFailurePolicy extends SpeakeasyBase {
    /**
     * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the initial interval in seconds for backoff.
     */
    intervalTime?: string;
    /**
     * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the number of times the task will be retried if failed.
     */
    maxRetries?: number;
    /**
     * Defines what happens to the task upon failure.
     */
    retryStrategy?: GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
}
