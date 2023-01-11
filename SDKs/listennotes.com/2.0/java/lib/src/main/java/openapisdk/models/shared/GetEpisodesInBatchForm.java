package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesInBatchForm {
    @SpeakeasyMetadata("form:name=ids")
    public String ids;
    public GetEpisodesInBatchForm withIds(String ids) {
        this.ids = ids;
        return this;
    }
}