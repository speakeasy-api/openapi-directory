package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CmHybridConfig
 * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
**/
public class CmHybridConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmAccountId")
    public String cmAccountId;
    public CmHybridConfig withCmAccountId(String cmAccountId) {
        this.cmAccountId = cmAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmFloodlightConfigId")
    public String cmFloodlightConfigId;
    public CmHybridConfig withCmFloodlightConfigId(String cmFloodlightConfigId) {
        this.cmFloodlightConfigId = cmFloodlightConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmFloodlightLinkingAuthorized")
    public Boolean cmFloodlightLinkingAuthorized;
    public CmHybridConfig withCmFloodlightLinkingAuthorized(Boolean cmFloodlightLinkingAuthorized) {
        this.cmFloodlightLinkingAuthorized = cmFloodlightLinkingAuthorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmSyncableSiteIds")
    public String[] cmSyncableSiteIds;
    public CmHybridConfig withCmSyncableSiteIds(String[] cmSyncableSiteIds) {
        this.cmSyncableSiteIds = cmSyncableSiteIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dv360ToCmCostReportingEnabled")
    public Boolean dv360ToCmCostReportingEnabled;
    public CmHybridConfig withDv360ToCmCostReportingEnabled(Boolean dv360ToCmCostReportingEnabled) {
        this.dv360ToCmCostReportingEnabled = dv360ToCmCostReportingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dv360ToCmDataSharingEnabled")
    public Boolean dv360ToCmDataSharingEnabled;
    public CmHybridConfig withDv360ToCmDataSharingEnabled(Boolean dv360ToCmDataSharingEnabled) {
        this.dv360ToCmDataSharingEnabled = dv360ToCmDataSharingEnabled;
        return this;
    }
}