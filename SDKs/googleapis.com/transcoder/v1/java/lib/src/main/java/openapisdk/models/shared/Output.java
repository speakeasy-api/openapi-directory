package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Output
 * Location of output file(s) in a Cloud Storage bucket.
**/
public class Output {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Output withUri(String uri) {
        this.uri = uri;
        return this;
    }
}