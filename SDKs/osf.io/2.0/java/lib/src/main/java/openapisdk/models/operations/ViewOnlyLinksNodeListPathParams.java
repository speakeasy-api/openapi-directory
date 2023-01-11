package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewOnlyLinksNodeListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public ViewOnlyLinksNodeListPathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}