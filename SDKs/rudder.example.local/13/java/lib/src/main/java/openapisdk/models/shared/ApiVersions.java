package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiVersions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public ApiVersion[] all;
    public ApiVersions withAll(ApiVersion[] all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest")
    public Long latest;
    public ApiVersions withLatest(Long latest) {
        this.latest = latest;
        return this;
    }
}