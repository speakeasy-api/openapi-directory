package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartDiseaseAssociationsResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetMartDiseaseAssociationsResourceQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
}