package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetReviewsFormatFormatEnum format;
    public GetReviewsFormatPathParams withFormat(GetReviewsFormatFormatEnum format) {
        this.format = format;
        return this;
    }
}