package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTargetsTargetIdSiteVerify401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public PostTargetsTargetIdSiteVerify401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
}