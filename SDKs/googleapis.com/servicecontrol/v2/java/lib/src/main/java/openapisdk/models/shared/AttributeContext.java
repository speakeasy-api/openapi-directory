package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributeContext
 * This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
**/
public class AttributeContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public Api api;
    public AttributeContext withApi(Api api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Peer destination;
    public AttributeContext withDestination(Peer destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public java.util.Map<String, Object>[] extensions;
    public AttributeContext withExtensions(java.util.Map<String, Object>[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public Peer origin;
    public AttributeContext withOrigin(Peer origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public Request request;
    public AttributeContext withRequest(Request request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;
    public AttributeContext withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public Response response;
    public AttributeContext withResponse(Response response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Peer source;
    public AttributeContext withSource(Peer source) {
        this.source = source;
        return this;
    }
}