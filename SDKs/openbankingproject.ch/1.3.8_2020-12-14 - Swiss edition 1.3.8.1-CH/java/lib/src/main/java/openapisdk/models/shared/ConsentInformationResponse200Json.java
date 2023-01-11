package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsentInformationResponse200Json
 * Body of the JSON response for a successfull get consent request.
**/
public class ConsentInformationResponse200Json {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public ConsentInformationResponse200Json withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonProperty("access")
    public AccountAccess access;
    public ConsentInformationResponse200Json withAccess(AccountAccess access) {
        this.access = access;
        return this;
    }
    @JsonProperty("consentStatus")
    public ConsentStatusEnum consentStatus;
    public ConsentInformationResponse200Json withConsentStatus(ConsentStatusEnum consentStatus) {
        this.consentStatus = consentStatus;
        return this;
    }
    @JsonProperty("frequencyPerDay")
    public Long frequencyPerDay;
    public ConsentInformationResponse200Json withFrequencyPerDay(Long frequencyPerDay) {
        this.frequencyPerDay = frequencyPerDay;
        return this;
    }
    @JsonProperty("lastActionDate")
    public LocalDate lastActionDate;
    public ConsentInformationResponse200Json withLastActionDate(LocalDate lastActionDate) {
        this.lastActionDate = lastActionDate;
        return this;
    }
    @JsonProperty("recurringIndicator")
    public Boolean recurringIndicator;
    public ConsentInformationResponse200Json withRecurringIndicator(Boolean recurringIndicator) {
        this.recurringIndicator = recurringIndicator;
        return this;
    }
    @JsonProperty("validUntil")
    public LocalDate validUntil;
    public ConsentInformationResponse200Json withValidUntil(LocalDate validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}