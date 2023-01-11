package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternalIdObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject - Find more info on the official Spotify Web API Reference
**/
public class ExternalIdObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;
    public ExternalIdObject withEan(String ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public ExternalIdObject withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upc")
    public String upc;
    public ExternalIdObject withUpc(String upc) {
        this.upc = upc;
        return this;
    }
}