package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CopyTemplateQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public CopyTemplateQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}