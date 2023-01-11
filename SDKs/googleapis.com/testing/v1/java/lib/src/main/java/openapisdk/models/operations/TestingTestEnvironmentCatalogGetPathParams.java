package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingTestEnvironmentCatalogGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentType")
    public TestingTestEnvironmentCatalogGetEnvironmentTypeEnum environmentType;
    public TestingTestEnvironmentCatalogGetPathParams withEnvironmentType(TestingTestEnvironmentCatalogGetEnvironmentTypeEnum environmentType) {
        this.environmentType = environmentType;
        return this;
    }
}