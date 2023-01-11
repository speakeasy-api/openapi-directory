package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenMetadataOfUtxoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verbosity")
    public Double verbosity;
    public TestnetGetTokenMetadataOfUtxoQueryParams withVerbosity(Double verbosity) {
        this.verbosity = verbosity;
        return this;
    }
}