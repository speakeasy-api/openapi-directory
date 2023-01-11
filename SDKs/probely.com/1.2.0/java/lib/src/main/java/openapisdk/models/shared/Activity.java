package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change")
    public Long change;
    public Activity withChange(Long change) {
        this.change = change;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Activity withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Activity withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public Activity withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_value")
    public String oldValue;
    public Activity withOldValue(String oldValue) {
        this.oldValue = oldValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Activity withValue(String value) {
        this.value = value;
        return this;
    }
}