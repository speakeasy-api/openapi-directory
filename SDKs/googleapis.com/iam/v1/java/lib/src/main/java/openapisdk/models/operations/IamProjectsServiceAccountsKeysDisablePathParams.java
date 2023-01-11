package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamProjectsServiceAccountsKeysDisablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}