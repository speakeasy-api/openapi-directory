package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveKind")
    public openapisdk.models.shared.ArchiveKindEnum archiveKind;
    public RestoreArchivePathParams withArchiveKind(openapisdk.models.shared.ArchiveKindEnum archiveKind) {
        this.archiveKind = archiveKind;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveRestoreKind")
    public openapisdk.models.shared.ArchiveKindEnum1 archiveRestoreKind;
    public RestoreArchivePathParams withArchiveRestoreKind(openapisdk.models.shared.ArchiveKindEnum1 archiveRestoreKind) {
        this.archiveRestoreKind = archiveRestoreKind;
        return this;
    }
}