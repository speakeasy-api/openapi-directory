package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceMetadataInBatchRequest
 * Request to update device metadata in batch.
**/
public class UpdateDeviceMetadataInBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updates")
    public UpdateMetadataArguments[] updates;
    public UpdateDeviceMetadataInBatchRequest withUpdates(UpdateMetadataArguments[] updates) {
        this.updates = updates;
        return this;
    }
}