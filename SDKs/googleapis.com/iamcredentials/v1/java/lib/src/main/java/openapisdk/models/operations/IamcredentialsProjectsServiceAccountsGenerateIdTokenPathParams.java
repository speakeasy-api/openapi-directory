package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams withName(String name) {
        this.name = name;
        return this;
    }
}