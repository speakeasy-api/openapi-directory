package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenMetadataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verbosity")
    public Double verbosity;
    public GetTokenMetadataQueryParams withVerbosity(Double verbosity) {
        this.verbosity = verbosity;
        return this;
    }
}