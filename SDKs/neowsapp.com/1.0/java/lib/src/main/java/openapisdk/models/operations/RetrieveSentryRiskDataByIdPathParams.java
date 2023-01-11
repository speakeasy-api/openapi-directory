package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveSentryRiskDataByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asteroid_id")
    public String asteroidId;
    public RetrieveSentryRiskDataByIdPathParams withAsteroidId(String asteroidId) {
        this.asteroidId = asteroidId;
        return this;
    }
}