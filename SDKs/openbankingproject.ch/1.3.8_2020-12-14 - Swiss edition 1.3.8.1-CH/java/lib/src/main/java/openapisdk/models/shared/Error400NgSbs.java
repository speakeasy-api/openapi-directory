package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error400NgSbs
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 * 
**/
public class Error400NgSbs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error400NgSbs withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage400Sbs[] tppMessages;
    public Error400NgSbs withTppMessages(TppMessage400Sbs[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}