package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1ClientState
 * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
**/
public class GoogleAppsCloudidentityDevicesV1ClientState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTags")
    public String[] assetTags;
    public GoogleAppsCloudidentityDevicesV1ClientState withAssetTags(String[] assetTags) {
        this.assetTags = assetTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceState")
    public GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum complianceState;
    public GoogleAppsCloudidentityDevicesV1ClientState withComplianceState(GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum complianceState) {
        this.complianceState = complianceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsCloudidentityDevicesV1ClientState withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customId")
    public String customId;
    public GoogleAppsCloudidentityDevicesV1ClientState withCustomId(String customId) {
        this.customId = customId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleAppsCloudidentityDevicesV1ClientState withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthScore")
    public GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum healthScore;
    public GoogleAppsCloudidentityDevicesV1ClientState withHealthScore(GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum healthScore) {
        this.healthScore = healthScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValuePairs")
    public java.util.Map<String, GoogleAppsCloudidentityDevicesV1CustomAttributeValue> keyValuePairs;
    public GoogleAppsCloudidentityDevicesV1ClientState withKeyValuePairs(java.util.Map<String, GoogleAppsCloudidentityDevicesV1CustomAttributeValue> keyValuePairs) {
        this.keyValuePairs = keyValuePairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTime")
    public String lastUpdateTime;
    public GoogleAppsCloudidentityDevicesV1ClientState withLastUpdateTime(String lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managed")
    public GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum managed;
    public GoogleAppsCloudidentityDevicesV1ClientState withManaged(GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum managed) {
        this.managed = managed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsCloudidentityDevicesV1ClientState withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerType")
    public GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum ownerType;
    public GoogleAppsCloudidentityDevicesV1ClientState withOwnerType(GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum ownerType) {
        this.ownerType = ownerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreReason")
    public String scoreReason;
    public GoogleAppsCloudidentityDevicesV1ClientState withScoreReason(String scoreReason) {
        this.scoreReason = scoreReason;
        return this;
    }
}