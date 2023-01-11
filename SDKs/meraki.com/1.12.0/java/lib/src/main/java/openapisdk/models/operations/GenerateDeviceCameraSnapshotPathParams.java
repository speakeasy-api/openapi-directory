package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDeviceCameraSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GenerateDeviceCameraSnapshotPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}