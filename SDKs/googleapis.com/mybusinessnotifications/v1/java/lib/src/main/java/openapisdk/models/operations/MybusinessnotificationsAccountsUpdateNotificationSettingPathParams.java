package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessnotificationsAccountsUpdateNotificationSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessnotificationsAccountsUpdateNotificationSettingPathParams withName(String name) {
        this.name = name;
        return this;
    }
}