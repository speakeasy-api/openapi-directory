package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public TemplatesCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}