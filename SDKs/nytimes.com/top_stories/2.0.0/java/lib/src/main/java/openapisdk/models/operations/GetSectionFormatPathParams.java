package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetSectionFormatFormatEnum format;
    public GetSectionFormatPathParams withFormat(GetSectionFormatFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section")
    public GetSectionFormatSectionEnum section;
    public GetSectionFormatPathParams withSection(GetSectionFormatSectionEnum section) {
        this.section = section;
        return this;
    }
}