package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewOnlyLinksReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public ViewOnlyLinksReadPathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}