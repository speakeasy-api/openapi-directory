package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsSignBlobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamcredentialsProjectsServiceAccountsSignBlobPathParams withName(String name) {
        this.name = name;
        return this;
    }
}