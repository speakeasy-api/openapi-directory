package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserAccountsUserAccountIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PatchUserAccountsUserAccountIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PatchUserAccountsUserAccountIdQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PatchUserAccountsUserAccountIdQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PatchUserAccountsUserAccountIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}