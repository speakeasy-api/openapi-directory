package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreInstanceRequest
 * RestoreInstanceRequest restores an existing instance's file share from a backup.
**/
public class RestoreInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileShare")
    public String fileShare;
    public RestoreInstanceRequest withFileShare(String fileShare) {
        this.fileShare = fileShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceBackup")
    public String sourceBackup;
    public RestoreInstanceRequest withSourceBackup(String sourceBackup) {
        this.sourceBackup = sourceBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceSnapshot")
    public String sourceSnapshot;
    public RestoreInstanceRequest withSourceSnapshot(String sourceSnapshot) {
        this.sourceSnapshot = sourceSnapshot;
        return this;
    }
}