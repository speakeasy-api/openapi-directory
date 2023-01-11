package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Report withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("file_id")
    public String fileId;
    public Report withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonProperty("process_id")
    public Long processId;
    public Report withProcessId(Long processId) {
        this.processId = processId;
        return this;
    }
    @JsonProperty("report_number")
    public Long reportNumber;
    public Report withReportNumber(Long reportNumber) {
        this.reportNumber = reportNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Result result;
    public Report withResult(Result result) {
        this.result = result;
        return this;
    }
    @JsonProperty("result_id")
    public Long resultId;
    public Report withResultId(Long resultId) {
        this.resultId = resultId;
        return this;
    }
}