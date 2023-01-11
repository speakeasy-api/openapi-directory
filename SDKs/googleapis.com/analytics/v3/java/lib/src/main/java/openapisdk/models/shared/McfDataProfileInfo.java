package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * McfDataProfileInfo
 * Information for the view (profile), for which the Analytics data was requested.
**/
public class McfDataProfileInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public McfDataProfileInfo withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public McfDataProfileInfo withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public McfDataProfileInfo withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileName")
    public String profileName;
    public McfDataProfileInfo withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public McfDataProfileInfo withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public McfDataProfileInfo withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}