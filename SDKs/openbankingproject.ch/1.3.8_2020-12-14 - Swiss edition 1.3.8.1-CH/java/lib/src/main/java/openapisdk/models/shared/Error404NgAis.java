package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error404NgAis
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
public class Error404NgAis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error404NgAis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage404Ais[] tppMessages;
    public Error404NgAis withTppMessages(TppMessage404Ais[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}