package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Conversion
 * A Conversion represents when a user successfully performs a desired action after seeing an ad.
**/
public class Conversion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childDirectedTreatment")
    public Boolean childDirectedTreatment;
    public Conversion withChildDirectedTreatment(Boolean childDirectedTreatment) {
        this.childDirectedTreatment = childDirectedTreatment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customVariables")
    public CustomFloodlightVariable[] customVariables;
    public Conversion withCustomVariables(CustomFloodlightVariable[] customVariables) {
        this.customVariables = customVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedUserId")
    public String encryptedUserId;
    public Conversion withEncryptedUserId(String encryptedUserId) {
        this.encryptedUserId = encryptedUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedUserIdCandidates")
    public String[] encryptedUserIdCandidates;
    public Conversion withEncryptedUserIdCandidates(String[] encryptedUserIdCandidates) {
        this.encryptedUserIdCandidates = encryptedUserIdCandidates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityId")
    public String floodlightActivityId;
    public Conversion withFloodlightActivityId(String floodlightActivityId) {
        this.floodlightActivityId = floodlightActivityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationId")
    public String floodlightConfigurationId;
    public Conversion withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gclid")
    public String gclid;
    public Conversion withGclid(String gclid) {
        this.gclid = gclid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Conversion withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitAdTracking")
    public Boolean limitAdTracking;
    public Conversion withLimitAdTracking(Boolean limitAdTracking) {
        this.limitAdTracking = limitAdTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchId")
    public String matchId;
    public Conversion withMatchId(String matchId) {
        this.matchId = matchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceId")
    public String mobileDeviceId;
    public Conversion withMobileDeviceId(String mobileDeviceId) {
        this.mobileDeviceId = mobileDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonPersonalizedAd")
    public Boolean nonPersonalizedAd;
    public Conversion withNonPersonalizedAd(Boolean nonPersonalizedAd) {
        this.nonPersonalizedAd = nonPersonalizedAd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordinal")
    public String ordinal;
    public Conversion withOrdinal(String ordinal) {
        this.ordinal = ordinal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public Conversion withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampMicros")
    public String timestampMicros;
    public Conversion withTimestampMicros(String timestampMicros) {
        this.timestampMicros = timestampMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treatmentForUnderage")
    public Boolean treatmentForUnderage;
    public Conversion withTreatmentForUnderage(Boolean treatmentForUnderage) {
        this.treatmentForUnderage = treatmentForUnderage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public Conversion withValue(Double value) {
        this.value = value;
        return this;
    }
}