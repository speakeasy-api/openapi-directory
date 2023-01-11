package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudStorageSink
 * Export sink for Cloud Storage files.
**/
public class CloudStorageSink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public CloudStorageFile[] files;
    public CloudStorageSink withFiles(CloudStorageFile[] files) {
        this.files = files;
        return this;
    }
}