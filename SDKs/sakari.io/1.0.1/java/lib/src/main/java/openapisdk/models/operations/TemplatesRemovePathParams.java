package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public TemplatesRemovePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateId")
    public String templateId;
    public TemplatesRemovePathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}