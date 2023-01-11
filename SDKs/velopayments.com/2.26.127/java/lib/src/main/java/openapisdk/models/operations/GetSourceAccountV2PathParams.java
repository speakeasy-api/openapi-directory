package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceAccountV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public GetSourceAccountV2PathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}