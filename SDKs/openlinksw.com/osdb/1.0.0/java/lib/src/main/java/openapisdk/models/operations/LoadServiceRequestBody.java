package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LoadServiceRequestBody {
    @JsonProperty("service_description_url")
    public String serviceDescriptionUrl;
    public LoadServiceRequestBody withServiceDescriptionUrl(String serviceDescriptionUrl) {
        this.serviceDescriptionUrl = serviceDescriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_moniker")
    public String serviceMoniker;
    public LoadServiceRequestBody withServiceMoniker(String serviceMoniker) {
        this.serviceMoniker = serviceMoniker;
        return this;
    }
}