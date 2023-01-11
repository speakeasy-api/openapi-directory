package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiUsageList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ApiUsage[] data;
    public ApiUsageList withData(ApiUsage[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ApiUsageList withObject(String object) {
        this.object = object;
        return this;
    }
}