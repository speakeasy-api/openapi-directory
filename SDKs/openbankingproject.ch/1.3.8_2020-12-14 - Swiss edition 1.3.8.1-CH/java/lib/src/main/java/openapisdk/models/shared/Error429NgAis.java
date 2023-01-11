package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error429NgAis
 * NextGen specific definition of reporting error information in case of a HTTP error code 429.
 * 
**/
public class Error429NgAis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error429NgAis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage429Ais[] tppMessages;
    public Error429NgAis withTppMessages(TppMessage429Ais[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}