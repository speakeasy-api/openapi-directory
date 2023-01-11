package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ClientStringTranslation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ClientStringTranslation withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_changed")
    public OffsetDateTime lastChanged;
    public ClientStringTranslation withLastChanged(OffsetDateTime lastChanged) {
        this.lastChanged = lastChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public ClientStringTranslation withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public ClientStringTranslation withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ClientStringTranslationStateEnum state;
    public ClientStringTranslation withState(ClientStringTranslationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_language")
    public String targetLanguage;
    public ClientStringTranslation withTargetLanguage(String targetLanguage) {
        this.targetLanguage = targetLanguage;
        return this;
    }
}