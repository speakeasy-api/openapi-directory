package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTlsRoutesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworkservicesProjectsLocationsTlsRoutesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}