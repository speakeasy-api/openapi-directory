package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error404NgPis
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
public class Error404NgPis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error404NgPis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage404Pis[] tppMessages;
    public Error404NgPis withTppMessages(TppMessage404Pis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}