package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupRun
 * A BackupRun resource.
**/
public class BackupRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupKind")
    public BackupRunBackupKindEnum backupKind;
    public BackupRun withBackupKind(BackupRunBackupKindEnum backupKind) {
        this.backupKind = backupKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BackupRun withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionConfiguration")
    public DiskEncryptionConfiguration diskEncryptionConfiguration;
    public BackupRun withDiskEncryptionConfiguration(DiskEncryptionConfiguration diskEncryptionConfiguration) {
        this.diskEncryptionConfiguration = diskEncryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryptionStatus")
    public DiskEncryptionStatus diskEncryptionStatus;
    public BackupRun withDiskEncryptionStatus(DiskEncryptionStatus diskEncryptionStatus) {
        this.diskEncryptionStatus = diskEncryptionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public BackupRun withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enqueuedTime")
    public String enqueuedTime;
    public BackupRun withEnqueuedTime(String enqueuedTime) {
        this.enqueuedTime = enqueuedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public OperationError error;
    public BackupRun withError(OperationError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BackupRun withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public BackupRun withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BackupRun withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public BackupRun withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public BackupRun withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public BackupRun withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public BackupRunStatusEnum status;
    public BackupRun withStatus(BackupRunStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public BackupRun withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BackupRunTypeEnum type;
    public BackupRun withType(BackupRunTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowStartTime")
    public String windowStartTime;
    public BackupRun withWindowStartTime(String windowStartTime) {
        this.windowStartTime = windowStartTime;
        return this;
    }
}