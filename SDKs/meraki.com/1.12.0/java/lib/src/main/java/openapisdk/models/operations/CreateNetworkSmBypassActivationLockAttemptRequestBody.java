package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSmBypassActivationLockAttemptRequestBody {
    @JsonProperty("ids")
    public String[] ids;
    public CreateNetworkSmBypassActivationLockAttemptRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}