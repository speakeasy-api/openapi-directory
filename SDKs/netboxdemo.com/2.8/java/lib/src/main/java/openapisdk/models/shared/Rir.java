package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Rir {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregate_count")
    public Long aggregateCount;
    public Rir withAggregateCount(Long aggregateCount) {
        this.aggregateCount = aggregateCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Rir withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Rir withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_private")
    public Boolean isPrivate;
    public Rir withIsPrivate(Boolean isPrivate) {
        this.isPrivate = isPrivate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Rir withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Rir withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}