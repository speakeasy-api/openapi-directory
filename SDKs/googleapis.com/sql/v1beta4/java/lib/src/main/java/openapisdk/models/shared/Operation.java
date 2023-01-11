package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Operation
 * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
**/
public class Operation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupContext")
    public BackupContext backupContext;
    public Operation withBackupContext(BackupContext backupContext) {
        this.backupContext = backupContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Operation withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public OperationErrors error;
    public Operation withError(OperationErrors error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportContext")
    public ExportContext exportContext;
    public Operation withExportContext(ExportContext exportContext) {
        this.exportContext = exportContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importContext")
    public ImportContext importContext;
    public Operation withImportContext(ImportContext importContext) {
        this.importContext = importContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public Operation withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Operation withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Operation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationType")
    public OperationOperationTypeEnum operationType;
    public Operation withOperationType(OperationOperationTypeEnum operationType) {
        this.operationType = operationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Operation withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Operation withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OperationStatusEnum status;
    public Operation withStatus(OperationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public Operation withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLink")
    public String targetLink;
    public Operation withTargetLink(String targetLink) {
        this.targetLink = targetLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProject")
    public String targetProject;
    public Operation withTargetProject(String targetProject) {
        this.targetProject = targetProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public Operation withUser(String user) {
        this.user = user;
        return this;
    }
}