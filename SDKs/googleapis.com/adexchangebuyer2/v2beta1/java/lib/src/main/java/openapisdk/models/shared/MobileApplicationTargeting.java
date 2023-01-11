package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileApplicationTargeting
 * Mobile application targeting settings.
**/
public class MobileApplicationTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstPartyTargeting")
    public FirstPartyMobileApplicationTargeting firstPartyTargeting;
    public MobileApplicationTargeting withFirstPartyTargeting(FirstPartyMobileApplicationTargeting firstPartyTargeting) {
        this.firstPartyTargeting = firstPartyTargeting;
        return this;
    }
}