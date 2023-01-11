package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationName")
    public String destinationName;
    public ProductDestination withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intention")
    public String intention;
    public ProductDestination withIntention(String intention) {
        this.intention = intention;
        return this;
    }
}