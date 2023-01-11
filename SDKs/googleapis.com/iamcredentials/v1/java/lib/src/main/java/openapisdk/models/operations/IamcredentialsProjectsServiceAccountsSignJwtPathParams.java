package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsSignJwtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamcredentialsProjectsServiceAccountsSignJwtPathParams withName(String name) {
        this.name = name;
        return this;
    }
}