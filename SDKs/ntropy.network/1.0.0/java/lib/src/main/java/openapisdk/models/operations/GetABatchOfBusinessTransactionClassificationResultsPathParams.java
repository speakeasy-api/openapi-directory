package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetABatchOfBusinessTransactionClassificationResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetABatchOfBusinessTransactionClassificationResultsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}