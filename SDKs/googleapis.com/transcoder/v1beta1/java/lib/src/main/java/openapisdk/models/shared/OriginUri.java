package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OriginUri
 * The origin URI.
**/
public class OriginUri {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dash")
    public String dash;
    public OriginUri withDash(String dash) {
        this.dash = dash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hls")
    public String hls;
    public OriginUri withHls(String hls) {
        this.hls = hls;
        return this;
    }
}