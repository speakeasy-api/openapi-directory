package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Probe
 * Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
public class Probe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exec")
    public ExecAction exec;
    public Probe withExec(ExecAction exec) {
        this.exec = exec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThreshold")
    public Integer failureThreshold;
    public Probe withFailureThreshold(Integer failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpc")
    public GrpcAction grpc;
    public Probe withGrpc(GrpcAction grpc) {
        this.grpc = grpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpGet")
    public HttpGetAction httpGet;
    public Probe withHttpGet(HttpGetAction httpGet) {
        this.httpGet = httpGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialDelaySeconds")
    public Integer initialDelaySeconds;
    public Probe withInitialDelaySeconds(Integer initialDelaySeconds) {
        this.initialDelaySeconds = initialDelaySeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodSeconds")
    public Integer periodSeconds;
    public Probe withPeriodSeconds(Integer periodSeconds) {
        this.periodSeconds = periodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successThreshold")
    public Integer successThreshold;
    public Probe withSuccessThreshold(Integer successThreshold) {
        this.successThreshold = successThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpSocket")
    public TcpSocketAction tcpSocket;
    public Probe withTcpSocket(TcpSocketAction tcpSocket) {
        this.tcpSocket = tcpSocket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Integer timeoutSeconds;
    public Probe withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
}