package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenMetadataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verbosity")
    public Double verbosity;
    public TestnetGetTokenMetadataQueryParams withVerbosity(Double verbosity) {
        this.verbosity = verbosity;
        return this;
    }
}