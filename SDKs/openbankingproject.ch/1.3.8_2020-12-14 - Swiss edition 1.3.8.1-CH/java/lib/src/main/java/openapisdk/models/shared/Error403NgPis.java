package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error403NgPis
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
public class Error403NgPis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error403NgPis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage403Pis[] tppMessages;
    public Error403NgPis withTppMessages(TppMessage403Pis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}