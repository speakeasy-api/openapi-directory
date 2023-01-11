package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedynamiclinksGetLinkStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dynamicLink")
    public String dynamicLink;
    public FirebasedynamiclinksGetLinkStatsPathParams withDynamicLink(String dynamicLink) {
        this.dynamicLink = dynamicLink;
        return this;
    }
}