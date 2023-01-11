package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate date;
    public RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate withDate(RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate withType(String type) {
        this.type = type;
        return this;
    }
}