package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetABatchOfConsumerTransactionClassificationResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetABatchOfConsumerTransactionClassificationResultsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}