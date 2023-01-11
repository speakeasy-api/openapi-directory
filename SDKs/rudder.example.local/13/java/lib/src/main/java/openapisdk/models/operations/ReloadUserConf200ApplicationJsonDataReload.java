package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadUserConf200ApplicationJsonDataReload {
    @JsonProperty("status")
    public String status;
    public ReloadUserConf200ApplicationJsonDataReload withStatus(String status) {
        this.status = status;
        return this;
    }
}