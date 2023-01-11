package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePackageTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_id")
    public String packageId;
    public UpdatePackageTypePathParams withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}