package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SaveSnapshotRequest
 * Request to create a snapshot of a Cloud Composer environment.
**/
public class SaveSnapshotRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotLocation")
    public String snapshotLocation;
    public SaveSnapshotRequest withSnapshotLocation(String snapshotLocation) {
        this.snapshotLocation = snapshotLocation;
        return this;
    }
}