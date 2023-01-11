package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsrdapNameserverGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nameserverId")
    public String nameserverId;
    public DomainsrdapNameserverGetPathParams withNameserverId(String nameserverId) {
        this.nameserverId = nameserverId;
        return this;
    }
}