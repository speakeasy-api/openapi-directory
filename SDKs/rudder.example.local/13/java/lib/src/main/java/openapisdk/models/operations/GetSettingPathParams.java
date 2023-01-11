package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public String settingId;
    public GetSettingPathParams withSettingId(String settingId) {
        this.settingId = settingId;
        return this;
    }
}