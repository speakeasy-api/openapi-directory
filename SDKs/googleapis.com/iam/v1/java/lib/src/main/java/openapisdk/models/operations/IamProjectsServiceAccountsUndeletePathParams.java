package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamProjectsServiceAccountsUndeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}