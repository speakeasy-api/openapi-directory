package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MobileApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStore")
    public String appStore;
    public MobileApplication withAppStore(String appStore) {
        this.appStore = appStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalAppId")
    public String externalAppId;
    public MobileApplication withExternalAppId(String externalAppId) {
        this.externalAppId = externalAppId;
        return this;
    }
}