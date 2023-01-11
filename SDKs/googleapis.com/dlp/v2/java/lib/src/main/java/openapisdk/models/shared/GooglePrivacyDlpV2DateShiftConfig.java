package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DateShiftConfig
 * Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
**/
public class GooglePrivacyDlpV2DateShiftConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public GooglePrivacyDlpV2FieldId context;
    public GooglePrivacyDlpV2DateShiftConfig withContext(GooglePrivacyDlpV2FieldId context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKey")
    public GooglePrivacyDlpV2CryptoKey cryptoKey;
    public GooglePrivacyDlpV2DateShiftConfig withCryptoKey(GooglePrivacyDlpV2CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowerBoundDays")
    public Integer lowerBoundDays;
    public GooglePrivacyDlpV2DateShiftConfig withLowerBoundDays(Integer lowerBoundDays) {
        this.lowerBoundDays = lowerBoundDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upperBoundDays")
    public Integer upperBoundDays;
    public GooglePrivacyDlpV2DateShiftConfig withUpperBoundDays(Integer upperBoundDays) {
        this.upperBoundDays = upperBoundDays;
        return this;
    }
}