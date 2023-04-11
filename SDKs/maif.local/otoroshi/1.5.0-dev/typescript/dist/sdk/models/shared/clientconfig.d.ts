import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration of the circuit breaker for a service descriptor
 */
export declare class ClientConfig extends SpeakeasyBase {
    /**
     * Specify the factor to multiply the delay for each retry
     */
    backoffFactor: number;
    /**
     * Specify how long each call should last at most in milliseconds
     */
    callTimeout: number;
    /**
     * Specify how long the global call (with retries) should last at most in milliseconds
     */
    globalTimeout: number;
    /**
     * Specify how many errors can pass before opening the circuit breaker
     */
    maxErrors: number;
    /**
     * Specify how many times the client will try to fetch the result of the request after an error before giving up.
     */
    retries: number;
    /**
     * Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor
     */
    retryInitialDelay: number;
    /**
     * Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted
     */
    sampleInterval: number;
    /**
     * Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !
     */
    useCircuitBreaker: boolean;
}
