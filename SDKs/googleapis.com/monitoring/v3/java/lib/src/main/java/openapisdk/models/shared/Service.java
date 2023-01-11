package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngine")
    public AppEngine appEngine;
    public Service withAppEngine(AppEngine appEngine) {
        this.appEngine = appEngine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicService")
    public BasicService basicService;
    public Service withBasicService(BasicService basicService) {
        this.basicService = basicService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudEndpoints")
    public CloudEndpoints cloudEndpoints;
    public Service withCloudEndpoints(CloudEndpoints cloudEndpoints) {
        this.cloudEndpoints = cloudEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRun")
    public CloudRun cloudRun;
    public Service withCloudRun(CloudRun cloudRun) {
        this.cloudRun = cloudRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterIstio")
    public ClusterIstio clusterIstio;
    public Service withClusterIstio(ClusterIstio clusterIstio) {
        this.clusterIstio = clusterIstio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public java.util.Map<String, Object> custom;
    public Service withCustom(java.util.Map<String, Object> custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Service withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeNamespace")
    public GkeNamespace gkeNamespace;
    public Service withGkeNamespace(GkeNamespace gkeNamespace) {
        this.gkeNamespace = gkeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeService")
    public GkeService gkeService;
    public Service withGkeService(GkeService gkeService) {
        this.gkeService = gkeService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeWorkload")
    public GkeWorkload gkeWorkload;
    public Service withGkeWorkload(GkeWorkload gkeWorkload) {
        this.gkeWorkload = gkeWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istioCanonicalService")
    public IstioCanonicalService istioCanonicalService;
    public Service withIstioCanonicalService(IstioCanonicalService istioCanonicalService) {
        this.istioCanonicalService = istioCanonicalService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshIstio")
    public MeshIstio meshIstio;
    public Service withMeshIstio(MeshIstio meshIstio) {
        this.meshIstio = meshIstio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetry")
    public Telemetry telemetry;
    public Service withTelemetry(Telemetry telemetry) {
        this.telemetry = telemetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public Service withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}