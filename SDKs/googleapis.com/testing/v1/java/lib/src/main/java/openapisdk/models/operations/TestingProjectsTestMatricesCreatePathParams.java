package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingProjectsTestMatricesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public TestingProjectsTestMatricesCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}