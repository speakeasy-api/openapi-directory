package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenMetadataOfUtxoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verbosity")
    public Double verbosity;
    public GetTokenMetadataOfUtxoQueryParams withVerbosity(Double verbosity) {
        this.verbosity = verbosity;
        return this;
    }
}