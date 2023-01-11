package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CalendarsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel;
    public PutSetupV1CalendarsIdRequests withScheduleUpdateModel(openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel) {
        this.scheduleUpdateModel = scheduleUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel1;
    public PutSetupV1CalendarsIdRequests withScheduleUpdateModel1(openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel1) {
        this.scheduleUpdateModel1 = scheduleUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel2;
    public PutSetupV1CalendarsIdRequests withScheduleUpdateModel2(openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel2) {
        this.scheduleUpdateModel2 = scheduleUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel3;
    public PutSetupV1CalendarsIdRequests withScheduleUpdateModel3(openapisdk.models.shared.ScheduleUpdateModel scheduleUpdateModel3) {
        this.scheduleUpdateModel3 = scheduleUpdateModel3;
        return this;
    }
}