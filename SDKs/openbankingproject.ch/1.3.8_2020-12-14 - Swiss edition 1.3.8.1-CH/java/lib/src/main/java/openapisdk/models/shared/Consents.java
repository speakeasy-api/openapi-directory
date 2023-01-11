package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Consents
 * Content of the body of a consent request.
 * 
**/
public class Consents {
    @JsonProperty("access")
    public AccountAccess access;
    public Consents withAccess(AccountAccess access) {
        this.access = access;
        return this;
    }
    @JsonProperty("combinedServiceIndicator")
    public Boolean combinedServiceIndicator;
    public Consents withCombinedServiceIndicator(Boolean combinedServiceIndicator) {
        this.combinedServiceIndicator = combinedServiceIndicator;
        return this;
    }
    @JsonProperty("frequencyPerDay")
    public Long frequencyPerDay;
    public Consents withFrequencyPerDay(Long frequencyPerDay) {
        this.frequencyPerDay = frequencyPerDay;
        return this;
    }
    @JsonProperty("recurringIndicator")
    public Boolean recurringIndicator;
    public Consents withRecurringIndicator(Boolean recurringIndicator) {
        this.recurringIndicator = recurringIndicator;
        return this;
    }
    @JsonProperty("validUntil")
    public LocalDate validUntil;
    public Consents withValidUntil(LocalDate validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}