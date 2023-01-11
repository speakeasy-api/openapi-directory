package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileNeedsVendor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public Long fileId;
    public FileNeedsVendor withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public Long projectId;
    public FileNeedsVendor withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public FileNeedsVendor withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguage")
    public String[] targetLanguage;
    public FileNeedsVendor withTargetLanguage(String[] targetLanguage) {
        this.targetLanguage = targetLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskType")
    public String[] taskType;
    public FileNeedsVendor withTaskType(String[] taskType) {
        this.taskType = taskType;
        return this;
    }
}