package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesCalendarRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel;
    public PostSetupV1ServicesCalendarRequests withServiceCalendarInputModel(openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel) {
        this.serviceCalendarInputModel = serviceCalendarInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel1;
    public PostSetupV1ServicesCalendarRequests withServiceCalendarInputModel1(openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel1) {
        this.serviceCalendarInputModel1 = serviceCalendarInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel2;
    public PostSetupV1ServicesCalendarRequests withServiceCalendarInputModel2(openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel2) {
        this.serviceCalendarInputModel2 = serviceCalendarInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel3;
    public PostSetupV1ServicesCalendarRequests withServiceCalendarInputModel3(openapisdk.models.shared.ServiceCalendarInputModel serviceCalendarInputModel3) {
        this.serviceCalendarInputModel3 = serviceCalendarInputModel3;
        return this;
    }
}