package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error406NgAis
 * NextGen specific definition of reporting error information in case of a HTTP error code 406.
 * 
**/
public class Error406NgAis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error406NgAis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage406Ais[] tppMessages;
    public Error406NgAis withTppMessages(TppMessage406Ais[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}