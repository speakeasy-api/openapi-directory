package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditPictureAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portraitset_id")
    public Double portraitsetId;
    public EditPictureAlt1PathParams withPortraitsetId(Double portraitsetId) {
        this.portraitsetId = portraitsetId;
        return this;
    }
}