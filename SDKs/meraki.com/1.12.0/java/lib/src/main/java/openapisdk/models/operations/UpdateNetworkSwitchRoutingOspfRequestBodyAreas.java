package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchRoutingOspfRequestBodyAreas {
    @JsonProperty("areaId")
    public Long areaId;
    public UpdateNetworkSwitchRoutingOspfRequestBodyAreas withAreaId(Long areaId) {
        this.areaId = areaId;
        return this;
    }
    @JsonProperty("areaName")
    public String areaName;
    public UpdateNetworkSwitchRoutingOspfRequestBodyAreas withAreaName(String areaName) {
        this.areaName = areaName;
        return this;
    }
    @JsonProperty("areaType")
    public UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum areaType;
    public UpdateNetworkSwitchRoutingOspfRequestBodyAreas withAreaType(UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum areaType) {
        this.areaType = areaType;
        return this;
    }
}