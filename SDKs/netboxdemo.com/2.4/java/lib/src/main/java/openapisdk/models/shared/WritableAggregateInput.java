package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableAggregateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableAggregateInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_added")
    public LocalDate dateAdded;
    public WritableAggregateInput withDateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableAggregateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public WritableAggregateInput withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonProperty("rir")
    public Long rir;
    public WritableAggregateInput withRir(Long rir) {
        this.rir = rir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableAggregateInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}