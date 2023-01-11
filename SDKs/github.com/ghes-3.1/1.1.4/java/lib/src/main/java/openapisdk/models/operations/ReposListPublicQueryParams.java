package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListPublicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public ReposListPublicQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visibility")
    public openapisdk.models.shared.SinceRepoEnum visibility;
    public ReposListPublicQueryParams withVisibility(openapisdk.models.shared.SinceRepoEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}