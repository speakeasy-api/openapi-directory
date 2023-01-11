package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Warnings
 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
 * 
 * From the specification:
 * 
 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
 * 
 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
**/
public class Warnings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Warnings withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("detail")
    public String detail;
    public Warnings withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Warnings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public WarningsErrorLinks links;
    public Warnings withLinks(WarningsErrorLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public Warnings withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public WarningsErrorSource source;
    public Warnings withSource(WarningsErrorSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Warnings withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Warnings withType(String type) {
        this.type = type;
        return this;
    }
}