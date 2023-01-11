package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public UpdateTemplateQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}