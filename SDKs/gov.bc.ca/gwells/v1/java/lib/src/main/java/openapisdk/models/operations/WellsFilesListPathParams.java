package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WellsFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag")
    public String tag;
    public WellsFilesListPathParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}