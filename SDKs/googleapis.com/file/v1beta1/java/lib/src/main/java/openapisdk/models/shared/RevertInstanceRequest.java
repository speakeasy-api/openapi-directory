package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevertInstanceRequest
 * RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
**/
public class RevertInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSnapshotId")
    public String targetSnapshotId;
    public RevertInstanceRequest withTargetSnapshotId(String targetSnapshotId) {
        this.targetSnapshotId = targetSnapshotId;
        return this;
    }
}