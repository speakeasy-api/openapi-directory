package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapUpdateIapSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IapUpdateIapSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}