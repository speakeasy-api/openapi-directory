package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveKind")
    public openapisdk.models.shared.ArchiveKindEnum archiveKind;
    public CreateArchivePathParams withArchiveKind(openapisdk.models.shared.ArchiveKindEnum archiveKind) {
        this.archiveKind = archiveKind;
        return this;
    }
}