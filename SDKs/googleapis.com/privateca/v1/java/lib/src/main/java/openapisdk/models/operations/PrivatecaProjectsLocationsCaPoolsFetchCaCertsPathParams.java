package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=caPool")
    public String caPool;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams withCaPool(String caPool) {
        this.caPool = caPool;
        return this;
    }
}