package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error403NgPiis
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 * 
**/
public class Error403NgPiis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error403NgPiis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage403Piis[] tppMessages;
    public Error403NgPiis withTppMessages(TppMessage403Piis[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
}