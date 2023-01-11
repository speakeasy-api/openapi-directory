package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSsoAssignmentsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityInboundSsoAssignmentsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}