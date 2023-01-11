package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsSignJwtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamProjectsServiceAccountsSignJwtPathParams withName(String name) {
        this.name = name;
        return this;
    }
}