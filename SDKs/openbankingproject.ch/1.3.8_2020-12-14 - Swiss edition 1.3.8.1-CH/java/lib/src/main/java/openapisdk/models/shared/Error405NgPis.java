package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error405NgPis
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 * 
**/
public class Error405NgPis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error405NgPis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage405Pis[] tppMessages;
    public Error405NgPis withTppMessages(TppMessage405Pis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}