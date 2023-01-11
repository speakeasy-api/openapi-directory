package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadUserConf200ApplicationJsonData {
    @JsonProperty("reload")
    public ReloadUserConf200ApplicationJsonDataReload reload;
    public ReloadUserConf200ApplicationJsonData withReload(ReloadUserConf200ApplicationJsonDataReload reload) {
        this.reload = reload;
        return this;
    }
}