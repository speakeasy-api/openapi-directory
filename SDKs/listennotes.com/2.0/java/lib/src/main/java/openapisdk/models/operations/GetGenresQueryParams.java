package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top_level_only")
    public Long topLevelOnly;
    public GetGenresQueryParams withTopLevelOnly(Long topLevelOnly) {
        this.topLevelOnly = topLevelOnly;
        return this;
    }
}