package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingProjectsTestMatricesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public TestingProjectsTestMatricesGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=testMatrixId")
    public String testMatrixId;
    public TestingProjectsTestMatricesGetPathParams withTestMatrixId(String testMatrixId) {
        this.testMatrixId = testMatrixId;
        return this;
    }
}