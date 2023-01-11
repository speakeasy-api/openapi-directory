package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillDocumentLink {
    @JsonProperty("media_type")
    public String mediaType;
    public BillDocumentLink withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public BillDocumentLink withUrl(String url) {
        this.url = url;
        return this;
    }
}