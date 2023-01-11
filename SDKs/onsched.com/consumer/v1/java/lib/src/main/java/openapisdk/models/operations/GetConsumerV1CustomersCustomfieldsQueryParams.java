package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1CustomersCustomfieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=leadQuestions")
    public Boolean leadQuestions;
    public GetConsumerV1CustomersCustomfieldsQueryParams withLeadQuestions(Boolean leadQuestions) {
        this.leadQuestions = leadQuestions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1CustomersCustomfieldsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}