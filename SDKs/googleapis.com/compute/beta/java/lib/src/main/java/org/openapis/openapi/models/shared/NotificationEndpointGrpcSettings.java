/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationEndpointGrpcSettings - Represents a gRPC setting that describes one gRPC notification endpoint and the retry duration attempting to send notification to this endpoint.
 */
public class NotificationEndpointGrpcSettings {
    /**
     * Optional. If specified, this field is used to set the authority header by the sender of notifications. See https://tools.ietf.org/html/rfc7540#section-8.1.2.3
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authority")
    public String authority;

    public NotificationEndpointGrpcSettings withAuthority(String authority) {
        this.authority = authority;
        return this;
    }
    
    /**
     * Endpoint to which gRPC notifications are sent. This must be a valid gRPCLB DNS name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;

    public NotificationEndpointGrpcSettings withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    
    /**
     * Optional. If specified, this field is used to populate the "name" field in gRPC requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadName")
    public String payloadName;

    public NotificationEndpointGrpcSettings withPayloadName(String payloadName) {
        this.payloadName = payloadName;
        return this;
    }
    
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resendInterval")
    public Duration resendInterval;

    public NotificationEndpointGrpcSettings withResendInterval(Duration resendInterval) {
        this.resendInterval = resendInterval;
        return this;
    }
    
    /**
     * How much time (in seconds) is spent attempting notification retries until a successful response is received. Default is 30s. Limit is 20m (1200s). Must be a positive number.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryDurationSec")
    public Long retryDurationSec;

    public NotificationEndpointGrpcSettings withRetryDurationSec(Long retryDurationSec) {
        this.retryDurationSec = retryDurationSec;
        return this;
    }
    
    public NotificationEndpointGrpcSettings(){}
}
