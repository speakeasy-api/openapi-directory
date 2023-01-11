package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceGraphTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_publication")
    public Boolean isPublication;
    public GetEvidenceGraphTableQueryParams withIsPublication(Boolean isPublication) {
        this.isPublication = isPublication;
        return this;
    }
}