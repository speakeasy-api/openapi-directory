package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResponseEvents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SearchResponseEvents withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SearchResponseEventsTypeEnum type;
    public SearchResponseEvents withType(SearchResponseEventsTypeEnum type) {
        this.type = type;
        return this;
    }
}