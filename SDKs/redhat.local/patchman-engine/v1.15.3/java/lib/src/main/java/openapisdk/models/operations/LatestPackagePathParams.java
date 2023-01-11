package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LatestPackagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public LatestPackagePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}