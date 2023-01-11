package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFlowRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Revision")
    public String revision;
    public FetchFlowRevisionPathParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFlowRevisionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}