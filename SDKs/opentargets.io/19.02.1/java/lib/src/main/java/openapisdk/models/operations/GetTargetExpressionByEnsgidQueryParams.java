package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetExpressionByEnsgidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gene")
    public String gene;
    public GetTargetExpressionByEnsgidQueryParams withGene(String gene) {
        this.gene = gene;
        return this;
    }
}