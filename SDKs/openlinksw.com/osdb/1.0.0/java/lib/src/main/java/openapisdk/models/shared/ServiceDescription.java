package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServiceDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("import_source_uri")
    public String importSourceUri;
    public ServiceDescription withImportSourceUri(String importSourceUri) {
        this.importSourceUri = importSourceUri;
        return this;
    }
    @JsonProperty("service_id")
    public String serviceId;
    public ServiceDescription withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonProperty("service_name")
    public String serviceName;
    public ServiceDescription withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}