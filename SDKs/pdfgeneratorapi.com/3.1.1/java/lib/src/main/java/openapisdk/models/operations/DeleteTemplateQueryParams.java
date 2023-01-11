package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public DeleteTemplateQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}