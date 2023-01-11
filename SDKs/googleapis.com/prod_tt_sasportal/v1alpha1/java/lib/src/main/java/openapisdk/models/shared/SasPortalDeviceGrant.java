package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceGrant
 * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
**/
public class SasPortalDeviceGrant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelType")
    public SasPortalDeviceGrantChannelTypeEnum channelType;
    public SasPortalDeviceGrant withChannelType(SasPortalDeviceGrantChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public SasPortalDeviceGrant withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyRange")
    public SasPortalFrequencyRange frequencyRange;
    public SasPortalDeviceGrant withFrequencyRange(SasPortalFrequencyRange frequencyRange) {
        this.frequencyRange = frequencyRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantId")
    public String grantId;
    public SasPortalDeviceGrant withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastHeartbeatTransmitExpireTime")
    public String lastHeartbeatTransmitExpireTime;
    public SasPortalDeviceGrant withLastHeartbeatTransmitExpireTime(String lastHeartbeatTransmitExpireTime) {
        this.lastHeartbeatTransmitExpireTime = lastHeartbeatTransmitExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEirp")
    public Double maxEirp;
    public SasPortalDeviceGrant withMaxEirp(Double maxEirp) {
        this.maxEirp = maxEirp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moveList")
    public SasPortalDpaMoveList[] moveList;
    public SasPortalDeviceGrant withMoveList(SasPortalDpaMoveList[] moveList) {
        this.moveList = moveList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SasPortalDeviceGrantStateEnum state;
    public SasPortalDeviceGrant withState(SasPortalDeviceGrantStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReason")
    public String[] suspensionReason;
    public SasPortalDeviceGrant withSuspensionReason(String[] suspensionReason) {
        this.suspensionReason = suspensionReason;
        return this;
    }
}