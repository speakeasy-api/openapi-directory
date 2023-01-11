package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserUsernameTokenKindQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public String scope;
    public GetUserUsernameTokenKindQueryParams withScope(String scope) {
        this.scope = scope;
        return this;
    }
}