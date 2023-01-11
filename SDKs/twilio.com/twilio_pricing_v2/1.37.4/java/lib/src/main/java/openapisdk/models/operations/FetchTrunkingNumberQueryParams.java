package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrunkingNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OriginationNumber")
    public String originationNumber;
    public FetchTrunkingNumberQueryParams withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
}