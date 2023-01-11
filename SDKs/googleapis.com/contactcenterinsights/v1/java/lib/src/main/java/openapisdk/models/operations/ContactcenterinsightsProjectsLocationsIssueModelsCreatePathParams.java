package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}