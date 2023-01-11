package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Gcs
 * Represents a Google Cloud Storage volume.
**/
public class Gcs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remotePath")
    public String remotePath;
    public Gcs withRemotePath(String remotePath) {
        this.remotePath = remotePath;
        return this;
    }
}