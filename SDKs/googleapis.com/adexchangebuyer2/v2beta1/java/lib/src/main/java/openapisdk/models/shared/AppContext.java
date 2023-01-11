package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppContext
 * Output only. The app type the restriction applies to for mobile device.
**/
public class AppContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appTypes")
    public AppContextAppTypesEnum[] appTypes;
    public AppContext withAppTypes(AppContextAppTypesEnum[] appTypes) {
        this.appTypes = appTypes;
        return this;
    }
}