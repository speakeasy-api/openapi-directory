package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public MergeTemplatesQueryParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public MergeTemplatesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public openapisdk.models.shared.OutputEnum output;
    public MergeTemplatesQueryParams withOutput(openapisdk.models.shared.OutputEnum output) {
        this.output = output;
        return this;
    }
}