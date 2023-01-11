package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadsConfig
 * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
**/
public class WorkloadsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduler")
    public SchedulerResource scheduler;
    public WorkloadsConfig withScheduler(SchedulerResource scheduler) {
        this.scheduler = scheduler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServer")
    public WebServerResource webServer;
    public WorkloadsConfig withWebServer(WebServerResource webServer) {
        this.webServer = webServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worker")
    public WorkerResource worker;
    public WorkloadsConfig withWorker(WorkerResource worker) {
        this.worker = worker;
        return this;
    }
}