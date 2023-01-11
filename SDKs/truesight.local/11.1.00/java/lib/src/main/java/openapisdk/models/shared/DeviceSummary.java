package openapisdk.models.shared;



public class DeviceSummary {
    public Integer agentId;
    public DeviceSummary withAgentId(Integer agentId) {
        this.agentId = agentId;
        return this;
    }
    public String agentName;
    public DeviceSummary withAgentName(String agentName) {
        this.agentName = agentName;
        return this;
    }
    public Double ambientTemperature;
    public DeviceSummary withAmbientTemperature(Double ambientTemperature) {
        this.ambientTemperature = ambientTemperature;
        return this;
    }
    public String collectTime;
    public DeviceSummary withCollectTime(String collectTime) {
        this.collectTime = collectTime;
        return this;
    }
    public String deviceTSMOKey;
    public DeviceSummary withDeviceTsmoKey(String deviceTSMOKey) {
        this.deviceTSMOKey = deviceTSMOKey;
        return this;
    }
    public String deviceUrl;
    public DeviceSummary withDeviceUrl(String deviceUrl) {
        this.deviceUrl = deviceUrl;
        return this;
    }
    public Double heatingMargin;
    public DeviceSummary withHeatingMargin(Double heatingMargin) {
        this.heatingMargin = heatingMargin;
        return this;
    }
    public String heatingMarginUnit;
    public DeviceSummary withHeatingMarginUnit(String heatingMarginUnit) {
        this.heatingMarginUnit = heatingMarginUnit;
        return this;
    }
    public Integer id;
    public DeviceSummary withId(Integer id) {
        this.id = id;
        return this;
    }
    public String name;
    public DeviceSummary withName(String name) {
        this.name = name;
        return this;
    }
    public Double powerConsumption;
    public DeviceSummary withPowerConsumption(Double powerConsumption) {
        this.powerConsumption = powerConsumption;
        return this;
    }
    public String powerConsumptionUnit;
    public DeviceSummary withPowerConsumptionUnit(String powerConsumptionUnit) {
        this.powerConsumptionUnit = powerConsumptionUnit;
        return this;
    }
    public String productVersion;
    public DeviceSummary withProductVersion(String productVersion) {
        this.productVersion = productVersion;
        return this;
    }
    public Integer serverId;
    public DeviceSummary withServerId(Integer serverId) {
        this.serverId = serverId;
        return this;
    }
    public String serverName;
    public DeviceSummary withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    public String sid;
    public DeviceSummary withSid(String sid) {
        this.sid = sid;
        return this;
    }
    public DeviceSummaryTypeEnum type;
    public DeviceSummary withType(DeviceSummaryTypeEnum type) {
        this.type = type;
        return this;
    }
    public Long updateTimestamp;
    public DeviceSummary withUpdateTimestamp(Long updateTimestamp) {
        this.updateTimestamp = updateTimestamp;
        return this;
    }
}