package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nameFull")
    public String nameFull;
    public ParseNamePathParams withNameFull(String nameFull) {
        this.nameFull = nameFull;
        return this;
    }
}