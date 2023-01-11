package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Backup
 * The details of a backup resource.
**/
public class Backup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Backup withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Backup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Backup withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Backup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoringServices")
    public String[] restoringServices;
    public Backup withRestoringServices(String[] restoringServices) {
        this.restoringServices = restoringServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRevision")
    public Service serviceRevision;
    public Backup withServiceRevision(Service serviceRevision) {
        this.serviceRevision = serviceRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BackupStateEnum state;
    public Backup withState(BackupStateEnum state) {
        this.state = state;
        return this;
    }
}