package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarketingEventExternalUniqueIdentifier {
    @JsonProperty("appId")
    public Integer appId;
    public MarketingEventExternalUniqueIdentifier withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("externalAccountId")
    public String externalAccountId;
    public MarketingEventExternalUniqueIdentifier withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
    @JsonProperty("externalEventId")
    public String externalEventId;
    public MarketingEventExternalUniqueIdentifier withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}