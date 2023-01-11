package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePackageTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_id")
    public String packageId;
    public DeletePackageTypePathParams withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}