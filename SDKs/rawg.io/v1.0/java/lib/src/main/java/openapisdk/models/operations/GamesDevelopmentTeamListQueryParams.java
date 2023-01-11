package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesDevelopmentTeamListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GamesDevelopmentTeamListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GamesDevelopmentTeamListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GamesDevelopmentTeamListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}