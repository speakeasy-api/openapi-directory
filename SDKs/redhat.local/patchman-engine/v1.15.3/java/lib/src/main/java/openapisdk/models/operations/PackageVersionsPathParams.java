package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackageVersionsPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}