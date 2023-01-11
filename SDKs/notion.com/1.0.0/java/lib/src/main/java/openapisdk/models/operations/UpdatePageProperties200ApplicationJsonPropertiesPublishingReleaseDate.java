package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate date;
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate withDate(UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate withType(String type) {
        this.type = type;
        return this;
    }
}