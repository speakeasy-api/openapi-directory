package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public TemplatesUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateId")
    public String templateId;
    public TemplatesUpdatePathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}