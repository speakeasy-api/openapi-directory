package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesFetchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public TemplatesFetchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateId")
    public String templateId;
    public TemplatesFetchPathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}