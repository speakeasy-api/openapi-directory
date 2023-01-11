package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsrdapAutnumGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=autnumId")
    public String autnumId;
    public DomainsrdapAutnumGetPathParams withAutnumId(String autnumId) {
        this.autnumId = autnumId;
        return this;
    }
}