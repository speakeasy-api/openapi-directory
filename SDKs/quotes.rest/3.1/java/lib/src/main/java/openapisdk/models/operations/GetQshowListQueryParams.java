package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQshowListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=public")
    public Boolean public_;
    public GetQshowListQueryParams withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQshowListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}