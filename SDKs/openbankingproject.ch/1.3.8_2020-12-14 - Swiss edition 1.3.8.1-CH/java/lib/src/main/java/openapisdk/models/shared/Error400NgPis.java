package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error400NgPis
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
public class Error400NgPis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error400NgPis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage400Pis[] tppMessages;
    public Error400NgPis withTppMessages(TppMessage400Pis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}