package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HooksGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public HooksGetActionEnum action;
    public HooksGetQueryParams withAction(HooksGetActionEnum action) {
        this.action = action;
        return this;
    }
}