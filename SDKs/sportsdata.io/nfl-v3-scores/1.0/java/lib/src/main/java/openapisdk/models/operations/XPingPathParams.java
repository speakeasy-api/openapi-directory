package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class XPingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public XPingFormatEnum format;
    public XPingPathParams withFormat(XPingFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=seconds")
    public String seconds;
    public XPingPathParams withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}