package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAdvisorySystemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advisory_id")
    public String advisoryId;
    public ListAdvisorySystemsPathParams withAdvisoryId(String advisoryId) {
        this.advisoryId = advisoryId;
        return this;
    }
}