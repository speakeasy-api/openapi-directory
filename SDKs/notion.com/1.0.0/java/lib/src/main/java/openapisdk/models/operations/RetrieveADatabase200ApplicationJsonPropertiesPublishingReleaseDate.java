package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public java.util.Map<String, Object> date;
    public RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate withDate(java.util.Map<String, Object> date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate withType(String type) {
        this.type = type;
        return this;
    }
}