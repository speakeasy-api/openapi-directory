package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponse
 * Information about the server and the geographical area that it covers.
**/
public class InfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbox")
    public String bbox;
    public InfoResponse withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public java.util.Map<String, Object> features;
    public InfoResponse withFeatures(java.util.Map<String, Object> features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public InfoResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}