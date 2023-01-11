package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsReportsRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsReportsRunPathParams withName(String name) {
        this.name = name;
        return this;
    }
}