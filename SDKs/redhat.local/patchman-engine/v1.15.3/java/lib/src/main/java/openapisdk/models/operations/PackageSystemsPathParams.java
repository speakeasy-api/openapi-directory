package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageSystemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackageSystemsPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}