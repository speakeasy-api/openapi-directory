package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceInput
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
public class ServiceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngine")
    public AppEngine appEngine;
    public ServiceInput withAppEngine(AppEngine appEngine) {
        this.appEngine = appEngine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicService")
    public BasicService basicService;
    public ServiceInput withBasicService(BasicService basicService) {
        this.basicService = basicService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudEndpoints")
    public CloudEndpoints cloudEndpoints;
    public ServiceInput withCloudEndpoints(CloudEndpoints cloudEndpoints) {
        this.cloudEndpoints = cloudEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRun")
    public CloudRun cloudRun;
    public ServiceInput withCloudRun(CloudRun cloudRun) {
        this.cloudRun = cloudRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterIstio")
    public ClusterIstio clusterIstio;
    public ServiceInput withClusterIstio(ClusterIstio clusterIstio) {
        this.clusterIstio = clusterIstio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public java.util.Map<String, Object> custom;
    public ServiceInput withCustom(java.util.Map<String, Object> custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ServiceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeNamespace")
    public GkeNamespaceInput gkeNamespace;
    public ServiceInput withGkeNamespace(GkeNamespaceInput gkeNamespace) {
        this.gkeNamespace = gkeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeService")
    public GkeServiceInput gkeService;
    public ServiceInput withGkeService(GkeServiceInput gkeService) {
        this.gkeService = gkeService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeWorkload")
    public GkeWorkloadInput gkeWorkload;
    public ServiceInput withGkeWorkload(GkeWorkloadInput gkeWorkload) {
        this.gkeWorkload = gkeWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istioCanonicalService")
    public IstioCanonicalService istioCanonicalService;
    public ServiceInput withIstioCanonicalService(IstioCanonicalService istioCanonicalService) {
        this.istioCanonicalService = istioCanonicalService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshIstio")
    public MeshIstio meshIstio;
    public ServiceInput withMeshIstio(MeshIstio meshIstio) {
        this.meshIstio = meshIstio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetry")
    public Telemetry telemetry;
    public ServiceInput withTelemetry(Telemetry telemetry) {
        this.telemetry = telemetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public ServiceInput withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}