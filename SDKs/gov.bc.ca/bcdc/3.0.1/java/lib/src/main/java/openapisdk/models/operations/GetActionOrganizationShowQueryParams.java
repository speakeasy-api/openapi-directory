package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionOrganizationShowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_datasets")
    public Boolean includeDatasets;
    public GetActionOrganizationShowQueryParams withIncludeDatasets(Boolean includeDatasets) {
        this.includeDatasets = includeDatasets;
        return this;
    }
}