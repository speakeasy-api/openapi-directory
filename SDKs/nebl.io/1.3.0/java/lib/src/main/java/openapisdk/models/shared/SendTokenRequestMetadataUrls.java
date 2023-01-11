package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTokenRequestMetadataUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataHash")
    public String dataHash;
    public SendTokenRequestMetadataUrls withDataHash(String dataHash) {
        this.dataHash = dataHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public SendTokenRequestMetadataUrls withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SendTokenRequestMetadataUrls withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SendTokenRequestMetadataUrls withUrl(String url) {
        this.url = url;
        return this;
    }
}