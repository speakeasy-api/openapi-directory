package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public ApiVersionAll[] all;
    public ApiVersion withAll(ApiVersionAll[] all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest")
    public Long latest;
    public ApiVersion withLatest(Long latest) {
        this.latest = latest;
        return this;
    }
}