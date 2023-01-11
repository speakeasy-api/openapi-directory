package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Project {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Project withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public String fileId;
    public Project withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Project withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paypal_payment_id")
    public String paypalPaymentId;
    public Project withPaypalPaymentId(String paypalPaymentId) {
        this.paypalPaymentId = paypalPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("process")
    public Process process;
    public Project withProcess(Process process) {
        this.process = process;
        return this;
    }
    @JsonProperty("process_id")
    public String processId;
    public Project withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_number")
    public Long projectNumber;
    public Project withProjectNumber(Long projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_title")
    public String projectTitle;
    public Project withProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_file_id")
    public String resultFileId;
    public Project withResultFileId(String resultFileId) {
        this.resultFileId = resultFileId;
        return this;
    }
}