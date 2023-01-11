package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error403NgAis
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
public class Error403NgAis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error403NgAis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage403Ais[] tppMessages;
    public Error403NgAis withTppMessages(TppMessage403Ais[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}