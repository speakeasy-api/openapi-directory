package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesSnapshotsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=snapshotId")
    public String snapshotId;
    public GamesSnapshotsGetPathParams withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}