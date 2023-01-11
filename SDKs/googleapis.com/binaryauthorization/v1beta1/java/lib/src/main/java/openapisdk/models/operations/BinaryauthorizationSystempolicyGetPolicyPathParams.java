package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationSystempolicyGetPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BinaryauthorizationSystempolicyGetPolicyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}