package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesGameSeriesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GamesGameSeriesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GamesGameSeriesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}