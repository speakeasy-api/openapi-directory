package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1CalendarsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ScheduleInputModel scheduleInputModel;
    public PostSetupV1CalendarsRequests withScheduleInputModel(openapisdk.models.shared.ScheduleInputModel scheduleInputModel) {
        this.scheduleInputModel = scheduleInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleInputModel scheduleInputModel1;
    public PostSetupV1CalendarsRequests withScheduleInputModel1(openapisdk.models.shared.ScheduleInputModel scheduleInputModel1) {
        this.scheduleInputModel1 = scheduleInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ScheduleInputModel scheduleInputModel2;
    public PostSetupV1CalendarsRequests withScheduleInputModel2(openapisdk.models.shared.ScheduleInputModel scheduleInputModel2) {
        this.scheduleInputModel2 = scheduleInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ScheduleInputModel scheduleInputModel3;
    public PostSetupV1CalendarsRequests withScheduleInputModel3(openapisdk.models.shared.ScheduleInputModel scheduleInputModel3) {
        this.scheduleInputModel3 = scheduleInputModel3;
        return this;
    }
}