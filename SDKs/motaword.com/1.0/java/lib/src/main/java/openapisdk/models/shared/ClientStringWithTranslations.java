package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ClientStringWithTranslations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ClientStringWithTranslations withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public ClientStringWithTranslations withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_changed")
    public OffsetDateTime lastChanged;
    public ClientStringWithTranslations withLastChanged(OffsetDateTime lastChanged) {
        this.lastChanged = lastChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public ClientStringTranslation[] translations;
    public ClientStringWithTranslations withTranslations(ClientStringTranslation[] translations) {
        this.translations = translations;
        return this;
    }
}