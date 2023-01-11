package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CommentaryCommentary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public CommentaryCommentary withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Detail")
    public String detail;
    public CommentaryCommentary withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employee")
    public CommentaryCommentaryEmployee employee;
    public CommentaryCommentary withEmployee(CommentaryCommentaryEmployee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRun")
    public CommentaryCommentaryPayRun payRun;
    public CommentaryCommentary withPayRun(CommentaryCommentaryPayRun payRun) {
        this.payRun = payRun;
        return this;
    }
}