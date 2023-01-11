package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherProfileMobileApplication
 * A mobile application that contains a external app ID, name, and app store.
**/
public class PublisherProfileMobileApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStore")
    public PublisherProfileMobileApplicationAppStoreEnum appStore;
    public PublisherProfileMobileApplication withAppStore(PublisherProfileMobileApplicationAppStoreEnum appStore) {
        this.appStore = appStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalAppId")
    public String externalAppId;
    public PublisherProfileMobileApplication withExternalAppId(String externalAppId) {
        this.externalAppId = externalAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublisherProfileMobileApplication withName(String name) {
        this.name = name;
        return this;
    }
}