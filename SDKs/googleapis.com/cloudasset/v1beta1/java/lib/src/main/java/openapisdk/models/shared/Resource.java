package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * A representation of a Google Cloud resource.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public Resource withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoveryDocumentUri")
    public String discoveryDocumentUri;
    public Resource withDiscoveryDocumentUri(String discoveryDocumentUri) {
        this.discoveryDocumentUri = discoveryDocumentUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoveryName")
    public String discoveryName;
    public Resource withDiscoveryName(String discoveryName) {
        this.discoveryName = discoveryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public Resource withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUrl")
    public String resourceUrl;
    public Resource withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Resource withVersion(String version) {
        this.version = version;
        return this;
    }
}