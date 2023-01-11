package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitorKeyUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public MonitorKeyUsagePathParams withKey(String key) {
        this.key = key;
        return this;
    }
}