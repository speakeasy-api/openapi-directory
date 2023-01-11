package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranslationsListResponse
 * The main language translation response message.
**/
public class TranslationsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public TranslationsResource[] translations;
    public TranslationsListResponse withTranslations(TranslationsResource[] translations) {
        this.translations = translations;
        return this;
    }
}