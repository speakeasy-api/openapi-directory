package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate date;
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate withDate(QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate withType(String type) {
        this.type = type;
        return this;
    }
}