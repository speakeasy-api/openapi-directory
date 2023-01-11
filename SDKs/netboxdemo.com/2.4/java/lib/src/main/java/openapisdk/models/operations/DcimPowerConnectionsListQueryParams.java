package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerConnectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=connection_status")
    public String connectionStatus;
    public DcimPowerConnectionsListQueryParams withConnectionStatus(String connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device")
    public String device;
    public DcimPowerConnectionsListQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimPowerConnectionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimPowerConnectionsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimPowerConnectionsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public DcimPowerConnectionsListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}