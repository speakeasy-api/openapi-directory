package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RealtimeDataProfileInfo
 * Information for the view (profile), for which the real time data was requested.
**/
public class RealtimeDataProfileInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RealtimeDataProfileInfo withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public RealtimeDataProfileInfo withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public RealtimeDataProfileInfo withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileName")
    public String profileName;
    public RealtimeDataProfileInfo withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public RealtimeDataProfileInfo withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public RealtimeDataProfileInfo withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}