package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsUpdateNotificationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsUpdateNotificationsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}