package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicSubscriptionStatus
 * The status of a subscription for a contact.
**/
public class PublicSubscriptionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandId")
    public Long brandId;
    public PublicSubscriptionStatus withBrandId(Long brandId) {
        this.brandId = brandId;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PublicSubscriptionStatus withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PublicSubscriptionStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalBasis")
    public PublicSubscriptionStatusLegalBasisEnum legalBasis;
    public PublicSubscriptionStatus withLegalBasis(PublicSubscriptionStatusLegalBasisEnum legalBasis) {
        this.legalBasis = legalBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalBasisExplanation")
    public String legalBasisExplanation;
    public PublicSubscriptionStatus withLegalBasisExplanation(String legalBasisExplanation) {
        this.legalBasisExplanation = legalBasisExplanation;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PublicSubscriptionStatus withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferenceGroupName")
    public String preferenceGroupName;
    public PublicSubscriptionStatus withPreferenceGroupName(String preferenceGroupName) {
        this.preferenceGroupName = preferenceGroupName;
        return this;
    }
    @JsonProperty("sourceOfStatus")
    public PublicSubscriptionStatusSourceOfStatusEnum sourceOfStatus;
    public PublicSubscriptionStatus withSourceOfStatus(PublicSubscriptionStatusSourceOfStatusEnum sourceOfStatus) {
        this.sourceOfStatus = sourceOfStatus;
        return this;
    }
    @JsonProperty("status")
    public PublicSubscriptionStatusStatusEnum status;
    public PublicSubscriptionStatus withStatus(PublicSubscriptionStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}