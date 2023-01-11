package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetTracksQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=bpm")
    public openapisdk.models.shared.Bpm bpm;
    public GetTracksQueryParams withBpm(openapisdk.models.shared.Bpm bpm) {
        this.bpm = bpm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=created_at")
    public openapisdk.models.shared.CreatedAt createdAt;
    public GetTracksQueryParams withCreatedAt(openapisdk.models.shared.CreatedAt createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=duration")
    public openapisdk.models.shared.Duration duration;
    public GetTracksQueryParams withDuration(openapisdk.models.shared.Duration duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=genres")
    public String genres;
    public GetTracksQueryParams withGenres(String genres) {
        this.genres = genres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public GetTracksQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTracksQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=linked_partitioning")
    public Boolean linkedPartitioning;
    public GetTracksQueryParams withLinkedPartitioning(Boolean linkedPartitioning) {
        this.linkedPartitioning = linkedPartitioning;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetTracksQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetTracksQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetTracksQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}