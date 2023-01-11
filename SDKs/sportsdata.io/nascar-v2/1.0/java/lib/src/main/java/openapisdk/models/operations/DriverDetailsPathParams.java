package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriverDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driverid")
    public String driverid;
    public DriverDetailsPathParams withDriverid(String driverid) {
        this.driverid = driverid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DriverDetailsFormatEnum format;
    public DriverDetailsPathParams withFormat(DriverDetailsFormatEnum format) {
        this.format = format;
        return this;
    }
}