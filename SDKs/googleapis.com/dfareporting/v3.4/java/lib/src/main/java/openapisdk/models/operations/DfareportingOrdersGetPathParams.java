package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingOrdersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingOrdersGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingOrdersGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DfareportingOrdersGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}