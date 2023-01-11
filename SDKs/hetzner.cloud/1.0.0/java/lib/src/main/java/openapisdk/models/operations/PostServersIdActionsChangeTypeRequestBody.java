package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeTypeRequestBody {
    @JsonProperty("server_type")
    public String serverType;
    public PostServersIdActionsChangeTypeRequestBody withServerType(String serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonProperty("upgrade_disk")
    public Boolean upgradeDisk;
    public PostServersIdActionsChangeTypeRequestBody withUpgradeDisk(Boolean upgradeDisk) {
        this.upgradeDisk = upgradeDisk;
        return this;
    }
}