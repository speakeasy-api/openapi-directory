package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedUniversalApk
 * Download metadata for a universal APK.
**/
public class GeneratedUniversalApk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadId")
    public String downloadId;
    public GeneratedUniversalApk withDownloadId(String downloadId) {
        this.downloadId = downloadId;
        return this;
    }
}