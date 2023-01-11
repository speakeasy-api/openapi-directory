package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public GetTemplateQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}