package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquifersListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aquifer_id")
    public Double aquiferId;
    public AquifersListQueryParams withAquiferId(Double aquiferId) {
        this.aquiferId = aquiferId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AquifersListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public AquifersListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public AquifersListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public AquifersListQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}