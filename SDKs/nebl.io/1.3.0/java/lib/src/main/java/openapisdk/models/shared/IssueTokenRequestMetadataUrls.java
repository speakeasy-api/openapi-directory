package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequestMetadataUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataHash")
    public String dataHash;
    public IssueTokenRequestMetadataUrls withDataHash(String dataHash) {
        this.dataHash = dataHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public IssueTokenRequestMetadataUrls withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IssueTokenRequestMetadataUrls withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public IssueTokenRequestMetadataUrls withUrl(String url) {
        this.url = url;
        return this;
    }
}