package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveNearEarthObjectByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asteroid_id")
    public String asteroidId;
    public RetrieveNearEarthObjectByIdPathParams withAsteroidId(String asteroidId) {
        this.asteroidId = asteroidId;
        return this;
    }
}