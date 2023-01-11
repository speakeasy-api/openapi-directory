package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public GetSourceAccountPathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}