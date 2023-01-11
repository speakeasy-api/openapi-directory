package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommunicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public CommunicationQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}