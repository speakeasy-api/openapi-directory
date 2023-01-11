package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebServerResource
 * Configuration for resources used by Airflow web server.
**/
public class WebServerResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Float cpu;
    public WebServerResource withCpu(Float cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryGb")
    public Float memoryGb;
    public WebServerResource withMemoryGb(Float memoryGb) {
        this.memoryGb = memoryGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageGb")
    public Float storageGb;
    public WebServerResource withStorageGb(Float storageGb) {
        this.storageGb = storageGb;
        return this;
    }
}