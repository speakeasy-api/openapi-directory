package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGlobalCompliance200ApplicationJsonData {
    @JsonProperty("globalCompliance")
    public GetGlobalCompliance200ApplicationJsonDataGlobalCompliance globalCompliance;
    public GetGlobalCompliance200ApplicationJsonData withGlobalCompliance(GetGlobalCompliance200ApplicationJsonDataGlobalCompliance globalCompliance) {
        this.globalCompliance = globalCompliance;
        return this;
    }
}