package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointsApiService
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
**/
public class EndpointsApiService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public EndpointsApiService withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTraceSampling")
    public Boolean disableTraceSampling;
    public EndpointsApiService withDisableTraceSampling(Boolean disableTraceSampling) {
        this.disableTraceSampling = disableTraceSampling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EndpointsApiService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutStrategy")
    public EndpointsApiServiceRolloutStrategyEnum rolloutStrategy;
    public EndpointsApiService withRolloutStrategy(EndpointsApiServiceRolloutStrategyEnum rolloutStrategy) {
        this.rolloutStrategy = rolloutStrategy;
        return this;
    }
}