package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiSubInformationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sectionId")
    public String sectionId;
    public ApiSubInformationsPathParams withSectionId(String sectionId) {
        this.sectionId = sectionId;
        return this;
    }
}