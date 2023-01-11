package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facilitators")
    public openapisdk.models.shared.OfferingIdEnum1 facilitators;
    public GetOfferingsOfferingIdUsersQueryParams withFacilitators(openapisdk.models.shared.OfferingIdEnum1 facilitators) {
        this.facilitators = facilitators;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=learners")
    public openapisdk.models.shared.OfferingIdEnum1 learners;
    public GetOfferingsOfferingIdUsersQueryParams withLearners(openapisdk.models.shared.OfferingIdEnum1 learners) {
        this.learners = learners;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=markers")
    public openapisdk.models.shared.OfferingIdEnum1 markers;
    public GetOfferingsOfferingIdUsersQueryParams withMarkers(openapisdk.models.shared.OfferingIdEnum1 markers) {
        this.markers = markers;
        return this;
    }
}