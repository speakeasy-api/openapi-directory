package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=connection_status")
    public String connectionStatus;
    public DcimInterfaceConnectionsListQueryParams withConnectionStatus(String connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device")
    public String device;
    public DcimInterfaceConnectionsListQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimInterfaceConnectionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimInterfaceConnectionsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public DcimInterfaceConnectionsListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}