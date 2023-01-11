package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifySettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public String settingId;
    public ModifySettingPathParams withSettingId(String settingId) {
        this.settingId = settingId;
        return this;
    }
}