package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPackageTypeByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_id")
    public String packageId;
    public GetPackageTypeByIdPathParams withPackageId(String packageId) {
        this.packageId = packageId;
        return this;
    }
}