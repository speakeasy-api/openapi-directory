package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBuildCreateBuildRequest {
    @SpeakeasyMetadata("form:name=AssetVersions")
    public String[] assetVersions;
    public CreateBuildCreateBuildRequest withAssetVersions(String[] assetVersions) {
        this.assetVersions = assetVersions;
        return this;
    }
    @SpeakeasyMetadata("form:name=Dependencies")
    public String dependencies;
    public CreateBuildCreateBuildRequest withDependencies(String dependencies) {
        this.dependencies = dependencies;
        return this;
    }
    @SpeakeasyMetadata("form:name=FunctionVersions")
    public String[] functionVersions;
    public CreateBuildCreateBuildRequest withFunctionVersions(String[] functionVersions) {
        this.functionVersions = functionVersions;
        return this;
    }
    @SpeakeasyMetadata("form:name=Runtime")
    public String runtime;
    public CreateBuildCreateBuildRequest withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
}