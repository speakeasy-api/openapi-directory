package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorProjectPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public VendorProjectPair withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_proofreader")
    public Boolean isProofreader;
    public VendorProjectPair withIsProofreader(Boolean isProofreader) {
        this.isProofreader = isProofreader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proofreader")
    public User proofreader;
    public VendorProjectPair withProofreader(User proofreader) {
        this.proofreader = proofreader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proofreading_rate")
    public Float proofreadingRate;
    public VendorProjectPair withProofreadingRate(Float proofreadingRate) {
        this.proofreadingRate = proofreadingRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public VendorProjectPair withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_language")
    public String targetLanguage;
    public VendorProjectPair withTargetLanguage(String targetLanguage) {
        this.targetLanguage = targetLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translation_rate")
    public Float translationRate;
    public VendorProjectPair withTranslationRate(Float translationRate) {
        this.translationRate = translationRate;
        return this;
    }
}