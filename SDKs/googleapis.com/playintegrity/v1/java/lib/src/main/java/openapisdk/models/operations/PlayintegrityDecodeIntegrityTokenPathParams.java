package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayintegrityDecodeIntegrityTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public PlayintegrityDecodeIntegrityTokenPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}