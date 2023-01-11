package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=days")
    public String days;
    public GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams withDays(String days) {
        this.days = days;
        return this;
    }
}