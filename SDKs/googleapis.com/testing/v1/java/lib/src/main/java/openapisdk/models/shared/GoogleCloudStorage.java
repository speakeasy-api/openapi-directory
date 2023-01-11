package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudStorage
 * A storage location within Google cloud storage (GCS).
**/
public class GoogleCloudStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsPath")
    public String gcsPath;
    public GoogleCloudStorage withGcsPath(String gcsPath) {
        this.gcsPath = gcsPath;
        return this;
    }
}