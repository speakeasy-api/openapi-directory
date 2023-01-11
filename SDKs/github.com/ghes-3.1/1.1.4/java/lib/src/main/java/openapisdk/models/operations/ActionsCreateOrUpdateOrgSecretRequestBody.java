package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsCreateOrUpdateOrgSecretRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted_value")
    public String encryptedValue;
    public ActionsCreateOrUpdateOrgSecretRequestBody withEncryptedValue(String encryptedValue) {
        this.encryptedValue = encryptedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key_id")
    public String keyId;
    public ActionsCreateOrUpdateOrgSecretRequestBody withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_repository_ids")
    public String[] selectedRepositoryIds;
    public ActionsCreateOrUpdateOrgSecretRequestBody withSelectedRepositoryIds(String[] selectedRepositoryIds) {
        this.selectedRepositoryIds = selectedRepositoryIds;
        return this;
    }
    @JsonProperty("visibility")
    public ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum visibility;
    public ActionsCreateOrUpdateOrgSecretRequestBody withVisibility(ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}