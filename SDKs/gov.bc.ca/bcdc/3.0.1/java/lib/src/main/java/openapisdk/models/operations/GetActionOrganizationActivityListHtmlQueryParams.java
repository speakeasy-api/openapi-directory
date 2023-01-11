package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationActivityListHtmlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionOrganizationActivityListHtmlQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}