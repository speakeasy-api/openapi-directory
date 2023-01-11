package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Probe
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
public class GoogleCloudRunV2Probe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThreshold")
    public Integer failureThreshold;
    public GoogleCloudRunV2Probe withFailureThreshold(Integer failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpc")
    public GoogleCloudRunV2GrpcAction grpc;
    public GoogleCloudRunV2Probe withGrpc(GoogleCloudRunV2GrpcAction grpc) {
        this.grpc = grpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpGet")
    public GoogleCloudRunV2HttpGetAction httpGet;
    public GoogleCloudRunV2Probe withHttpGet(GoogleCloudRunV2HttpGetAction httpGet) {
        this.httpGet = httpGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialDelaySeconds")
    public Integer initialDelaySeconds;
    public GoogleCloudRunV2Probe withInitialDelaySeconds(Integer initialDelaySeconds) {
        this.initialDelaySeconds = initialDelaySeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodSeconds")
    public Integer periodSeconds;
    public GoogleCloudRunV2Probe withPeriodSeconds(Integer periodSeconds) {
        this.periodSeconds = periodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpSocket")
    public GoogleCloudRunV2TcpSocketAction tcpSocket;
    public GoogleCloudRunV2Probe withTcpSocket(GoogleCloudRunV2TcpSocketAction tcpSocket) {
        this.tcpSocket = tcpSocket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Integer timeoutSeconds;
    public GoogleCloudRunV2Probe withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
}