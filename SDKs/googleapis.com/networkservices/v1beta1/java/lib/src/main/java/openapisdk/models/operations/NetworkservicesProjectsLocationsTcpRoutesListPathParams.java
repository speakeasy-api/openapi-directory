package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTcpRoutesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkservicesProjectsLocationsTcpRoutesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}