package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingProjectsTestMatricesCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public TestingProjectsTestMatricesCancelPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=testMatrixId")
    public String testMatrixId;
    public TestingProjectsTestMatricesCancelPathParams withTestMatrixId(String testMatrixId) {
        this.testMatrixId = testMatrixId;
        return this;
    }
}