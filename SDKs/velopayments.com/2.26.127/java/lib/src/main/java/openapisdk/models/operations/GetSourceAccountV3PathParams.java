package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceAccountV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public GetSourceAccountV3PathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}