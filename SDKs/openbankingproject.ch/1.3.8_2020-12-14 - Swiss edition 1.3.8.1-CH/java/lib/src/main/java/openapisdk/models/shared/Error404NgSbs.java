package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error404NgSbs
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 * 
**/
public class Error404NgSbs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error404NgSbs withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage404Sbs[] tppMessages;
    public Error404NgSbs withTppMessages(TppMessage404Sbs[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}