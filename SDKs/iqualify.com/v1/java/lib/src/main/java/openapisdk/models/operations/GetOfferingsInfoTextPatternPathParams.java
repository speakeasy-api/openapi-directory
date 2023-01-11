package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsInfoTextPatternPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=textPattern")
    public String textPattern;
    public GetOfferingsInfoTextPatternPathParams withTextPattern(String textPattern) {
        this.textPattern = textPattern;
        return this;
    }
}