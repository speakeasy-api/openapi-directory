package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartGeneAssociationsResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetMartGeneAssociationsResourceQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
}