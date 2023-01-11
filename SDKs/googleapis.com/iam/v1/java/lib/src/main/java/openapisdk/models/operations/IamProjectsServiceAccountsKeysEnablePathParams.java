package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysEnablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamProjectsServiceAccountsKeysEnablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}