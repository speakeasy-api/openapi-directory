package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppLinkedAppInfo
 * Information from the app store if the app is linked to an app store.
**/
public class AppLinkedAppInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStoreId")
    public String appStoreId;
    public AppLinkedAppInfo withAppStoreId(String appStoreId) {
        this.appStoreId = appStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AppLinkedAppInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}