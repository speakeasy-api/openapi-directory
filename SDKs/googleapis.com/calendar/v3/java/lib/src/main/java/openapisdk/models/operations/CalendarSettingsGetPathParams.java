package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarSettingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=setting")
    public String setting;
    public CalendarSettingsGetPathParams withSetting(String setting) {
        this.setting = setting;
        return this;
    }
}