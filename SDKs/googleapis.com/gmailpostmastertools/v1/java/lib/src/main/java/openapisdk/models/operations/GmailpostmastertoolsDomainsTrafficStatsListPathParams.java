package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GmailpostmastertoolsDomainsTrafficStatsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GmailpostmastertoolsDomainsTrafficStatsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}