package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableBackupActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDisableBackupActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsDisableBackupActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}