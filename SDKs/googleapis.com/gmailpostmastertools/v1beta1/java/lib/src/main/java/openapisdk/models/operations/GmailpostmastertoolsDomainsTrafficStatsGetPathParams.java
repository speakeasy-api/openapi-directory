package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GmailpostmastertoolsDomainsTrafficStatsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GmailpostmastertoolsDomainsTrafficStatsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}