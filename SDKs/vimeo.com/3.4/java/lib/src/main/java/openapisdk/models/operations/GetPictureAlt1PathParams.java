package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPictureAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portraitset_id")
    public Double portraitsetId;
    public GetPictureAlt1PathParams withPortraitsetId(Double portraitsetId) {
        this.portraitsetId = portraitsetId;
        return this;
    }
}