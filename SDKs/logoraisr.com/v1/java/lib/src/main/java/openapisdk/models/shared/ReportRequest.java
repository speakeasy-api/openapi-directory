package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportRequest {
    @JsonProperty("file_id")
    public String fileId;
    public ReportRequest withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonProperty("process")
    public String process;
    public ReportRequest withProcess(String process) {
        this.process = process;
        return this;
    }
}