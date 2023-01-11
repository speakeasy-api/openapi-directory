package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDownloadParameters
 * gdata
**/
public class GdataDownloadParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGzipCompression")
    public Boolean allowGzipCompression;
    public GdataDownloadParameters withAllowGzipCompression(Boolean allowGzipCompression) {
        this.allowGzipCompression = allowGzipCompression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreRange")
    public Boolean ignoreRange;
    public GdataDownloadParameters withIgnoreRange(Boolean ignoreRange) {
        this.ignoreRange = ignoreRange;
        return this;
    }
}