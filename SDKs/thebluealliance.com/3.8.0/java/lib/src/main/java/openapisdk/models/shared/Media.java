package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Media
 * The `Media` object contains a reference for most any media associated with a team or event on TBA.
**/
public class Media {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public Media withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_url")
    public String directUrl;
    public Media withDirectUrl(String directUrl) {
        this.directUrl = directUrl;
        return this;
    }
    @JsonProperty("foreign_key")
    public String foreignKey;
    public Media withForeignKey(String foreignKey) {
        this.foreignKey = foreignKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred")
    public Boolean preferred;
    public Media withPreferred(Boolean preferred) {
        this.preferred = preferred;
        return this;
    }
    @JsonProperty("type")
    public MediaTypeEnum type;
    public Media withType(MediaTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view_url")
    public String viewUrl;
    public Media withViewUrl(String viewUrl) {
        this.viewUrl = viewUrl;
        return this;
    }
}