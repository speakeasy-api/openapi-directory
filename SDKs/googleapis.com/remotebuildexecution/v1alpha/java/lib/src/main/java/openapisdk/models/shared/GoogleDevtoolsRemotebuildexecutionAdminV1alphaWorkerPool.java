package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
 * A worker pool resource in the Remote Build Execution API.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoscale")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale autoscale;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withAutoscale(GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale autoscale) {
        this.autoscale = autoscale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostOs")
    public String hostOs;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withHostOs(String hostOs) {
        this.hostOs = hostOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum state;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withState(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig workerConfig;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withWorkerConfig(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerCount")
    public String workerCount;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool withWorkerCount(String workerCount) {
        this.workerCount = workerCount;
        return this;
    }
}