package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationInventoryDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationInventoryDevicePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetOrganizationInventoryDevicePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}