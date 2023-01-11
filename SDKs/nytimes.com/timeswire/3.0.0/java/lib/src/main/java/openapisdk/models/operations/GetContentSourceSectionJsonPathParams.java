package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentSourceSectionJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section")
    public String section;
    public GetContentSourceSectionJsonPathParams withSection(String section) {
        this.section = section;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public GetContentSourceSectionJsonSourceEnum source;
    public GetContentSourceSectionJsonPathParams withSource(GetContentSourceSectionJsonSourceEnum source) {
        this.source = source;
        return this;
    }
}