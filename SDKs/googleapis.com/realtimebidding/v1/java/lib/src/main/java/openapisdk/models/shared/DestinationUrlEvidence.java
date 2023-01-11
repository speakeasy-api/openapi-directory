package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationUrlEvidence
 * The full landing page URL of the destination.
**/
public class DestinationUrlEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationUrl")
    public String destinationUrl;
    public DestinationUrlEvidence withDestinationUrl(String destinationUrl) {
        this.destinationUrl = destinationUrl;
        return this;
    }
}