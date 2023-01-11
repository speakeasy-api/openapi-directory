package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalizationSettings
 * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
**/
public class LocalizationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public LocalizationSettings withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public LocalizationSettings withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}