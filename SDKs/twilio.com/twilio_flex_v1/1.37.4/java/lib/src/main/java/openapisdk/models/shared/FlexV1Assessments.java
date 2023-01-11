package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1Assessments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1Assessments withUrl(String url) {
        this.url = url;
        return this;
    }
}