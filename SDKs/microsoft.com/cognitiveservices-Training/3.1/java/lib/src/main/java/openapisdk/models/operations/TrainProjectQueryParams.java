package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceTrain")
    public Boolean forceTrain;
    public TrainProjectQueryParams withForceTrain(Boolean forceTrain) {
        this.forceTrain = forceTrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notificationEmailAddress")
    public String notificationEmailAddress;
    public TrainProjectQueryParams withNotificationEmailAddress(String notificationEmailAddress) {
        this.notificationEmailAddress = notificationEmailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reservedBudgetInHours")
    public Integer reservedBudgetInHours;
    public TrainProjectQueryParams withReservedBudgetInHours(Integer reservedBudgetInHours) {
        this.reservedBudgetInHours = reservedBudgetInHours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trainingType")
    public TrainProjectTrainingTypeEnum trainingType;
    public TrainProjectQueryParams withTrainingType(TrainProjectTrainingTypeEnum trainingType) {
        this.trainingType = trainingType;
        return this;
    }
}