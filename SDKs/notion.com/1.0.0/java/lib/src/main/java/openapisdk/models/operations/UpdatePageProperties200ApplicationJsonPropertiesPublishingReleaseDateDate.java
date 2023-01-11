package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Object end;
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate withEnd(Object end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate withStart(String start) {
        this.start = start;
        return this;
    }
}