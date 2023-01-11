package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalizedStringBundle
 * A localized string bundle resource.
**/
public class LocalizedStringBundle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LocalizedStringBundle withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public LocalizedString[] translations;
    public LocalizedStringBundle withTranslations(LocalizedString[] translations) {
        this.translations = translations;
        return this;
    }
}