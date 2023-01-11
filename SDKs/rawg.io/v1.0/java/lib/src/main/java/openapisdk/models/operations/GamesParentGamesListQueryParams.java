package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesParentGamesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GamesParentGamesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GamesParentGamesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}