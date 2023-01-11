package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public String endDate;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public String startDate;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}