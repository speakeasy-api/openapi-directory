package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementTargeting
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
**/
public class PlacementTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApplicationTargeting")
    public MobileApplicationTargeting mobileApplicationTargeting;
    public PlacementTargeting withMobileApplicationTargeting(MobileApplicationTargeting mobileApplicationTargeting) {
        this.mobileApplicationTargeting = mobileApplicationTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriTargeting")
    public UriTargeting uriTargeting;
    public PlacementTargeting withUriTargeting(UriTargeting uriTargeting) {
        this.uriTargeting = uriTargeting;
        return this;
    }
}