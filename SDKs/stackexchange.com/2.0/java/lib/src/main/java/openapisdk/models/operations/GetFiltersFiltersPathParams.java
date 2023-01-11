package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFiltersFiltersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filters")
    public String filters;
    public GetFiltersFiltersPathParams withFilters(String filters) {
        this.filters = filters;
        return this;
    }
}