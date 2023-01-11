package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SvgconvertFileUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blob_name")
    public String blobName;
    public SvgconvertFileUrl withBlobName(String blobName) {
        this.blobName = blobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blob_url")
    public String blobUrl;
    public SvgconvertFileUrl withBlobUrl(String blobUrl) {
        this.blobUrl = blobUrl;
        return this;
    }
}