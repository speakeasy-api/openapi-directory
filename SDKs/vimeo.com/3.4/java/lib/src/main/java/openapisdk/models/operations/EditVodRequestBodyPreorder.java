package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVodRequestBodyPreorder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public EditVodRequestBodyPreorder withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publish_time")
    public String publishTime;
    public EditVodRequestBodyPreorder withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
}