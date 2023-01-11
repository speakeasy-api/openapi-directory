package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams withName(String name) {
        this.name = name;
        return this;
    }
}