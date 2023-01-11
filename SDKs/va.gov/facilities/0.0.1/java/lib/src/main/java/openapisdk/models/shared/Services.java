package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Services {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefits")
    public ServicesBenefitsEnum[] benefits;
    public Services withBenefits(ServicesBenefitsEnum[] benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public ServicesHealthEnum[] health;
    public Services withHealth(ServicesHealthEnum[] health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_updated")
    public LocalDate lastUpdated;
    public Services withLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other")
    public ServicesOtherEnum[] other;
    public Services withOther(ServicesOtherEnum[] other) {
        this.other = other;
        return this;
    }
}