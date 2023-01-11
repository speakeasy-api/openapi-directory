package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Domain
 * A domain that the calling user manages in Google Domains.
**/
public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public Domain withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceState")
    public DomainResourceStateEnum resourceState;
    public Domain withResourceState(DomainResourceStateEnum resourceState) {
        this.resourceState = resourceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearlyPrice")
    public Money yearlyPrice;
    public Domain withYearlyPrice(Money yearlyPrice) {
        this.yearlyPrice = yearlyPrice;
        return this;
    }
}