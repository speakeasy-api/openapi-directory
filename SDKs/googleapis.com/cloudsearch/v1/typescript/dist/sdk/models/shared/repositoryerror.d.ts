import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of error.
 */
export declare enum RepositoryErrorTypeEnum {
    Unknown = "UNKNOWN",
    NetworkError = "NETWORK_ERROR",
    DnsError = "DNS_ERROR",
    ConnectionError = "CONNECTION_ERROR",
    AuthenticationError = "AUTHENTICATION_ERROR",
    AuthorizationError = "AUTHORIZATION_ERROR",
    ServerError = "SERVER_ERROR",
    QuotaExceeded = "QUOTA_EXCEEDED",
    ServiceUnavailable = "SERVICE_UNAVAILABLE",
    ClientError = "CLIENT_ERROR"
}
/**
 * Errors when the connector is communicating to the source repository.
 */
export declare class RepositoryError extends SpeakeasyBase {
    /**
     * Message that describes the error. The maximum allowable length of the message is 8192 characters.
     */
    errorMessage?: string;
    /**
     * Error codes. Matches the definition of HTTP status codes.
     */
    httpStatusCode?: number;
    /**
     * The type of error.
     */
    type?: RepositoryErrorTypeEnum;
}
