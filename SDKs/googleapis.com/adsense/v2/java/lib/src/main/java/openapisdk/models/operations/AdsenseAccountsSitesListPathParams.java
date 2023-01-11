package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsSitesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdsenseAccountsSitesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}