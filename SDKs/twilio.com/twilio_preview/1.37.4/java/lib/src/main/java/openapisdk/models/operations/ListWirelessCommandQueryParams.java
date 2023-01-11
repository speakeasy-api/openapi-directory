package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWirelessCommandQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Device")
    public String device;
    public ListWirelessCommandQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Direction")
    public String direction;
    public ListWirelessCommandQueryParams withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWirelessCommandQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListWirelessCommandQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListWirelessCommandQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}