package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Day")
    public String day;
    public FetchDayPathParams withDay(String day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public FetchDayPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}