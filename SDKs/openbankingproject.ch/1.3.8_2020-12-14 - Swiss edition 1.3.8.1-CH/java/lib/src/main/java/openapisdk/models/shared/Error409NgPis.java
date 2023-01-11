package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error409NgPis
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 * 
**/
public class Error409NgPis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error409NgPis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage409Pis[] tppMessages;
    public Error409NgPis withTppMessages(TppMessage409Pis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}