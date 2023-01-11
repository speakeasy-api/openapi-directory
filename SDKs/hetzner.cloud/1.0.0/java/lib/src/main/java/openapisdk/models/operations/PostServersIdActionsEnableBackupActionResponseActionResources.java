package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsEnableBackupActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsEnableBackupActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsEnableBackupActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}