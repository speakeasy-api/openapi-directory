package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Assessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public Assessment withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dueDate")
    public OffsetDateTime dueDate;
    public Assessment withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markNumber")
    public String markNumber;
    public Assessment withMarkNumber(String markNumber) {
        this.markNumber = markNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markType")
    public String markType;
    public Assessment withMarkType(String markType) {
        this.markType = markType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("openDate")
    public OffsetDateTime openDate;
    public Assessment withOpenDate(OffsetDateTime openDate) {
        this.openDate = openDate;
        return this;
    }
}