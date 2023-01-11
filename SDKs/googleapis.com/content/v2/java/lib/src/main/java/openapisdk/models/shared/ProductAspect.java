package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductAspect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectName")
    public String aspectName;
    public ProductAspect withAspectName(String aspectName) {
        this.aspectName = aspectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationName")
    public String destinationName;
    public ProductAspect withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intention")
    public String intention;
    public ProductAspect withIntention(String intention) {
        this.intention = intention;
        return this;
    }
}