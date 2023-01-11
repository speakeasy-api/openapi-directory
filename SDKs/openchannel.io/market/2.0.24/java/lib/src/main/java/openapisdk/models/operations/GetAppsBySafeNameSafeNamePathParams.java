package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsBySafeNameSafeNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=safeName")
    public String safeName;
    public GetAppsBySafeNameSafeNamePathParams withSafeName(String safeName) {
        this.safeName = safeName;
        return this;
    }
}