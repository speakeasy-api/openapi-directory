package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public MergeTemplateQueryParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public MergeTemplateQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public openapisdk.models.shared.OutputEnum output;
    public MergeTemplateQueryParams withOutput(openapisdk.models.shared.OutputEnum output) {
        this.output = output;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public MergeTemplateQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}