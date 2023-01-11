package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartCaseAssociationsResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetMartCaseAssociationsResourceQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
}