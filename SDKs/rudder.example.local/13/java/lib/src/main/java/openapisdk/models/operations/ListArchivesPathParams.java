package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArchivesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveKind")
    public openapisdk.models.shared.ArchiveKindEnum archiveKind;
    public ListArchivesPathParams withArchiveKind(openapisdk.models.shared.ArchiveKindEnum archiveKind) {
        this.archiveKind = archiveKind;
        return this;
    }
}