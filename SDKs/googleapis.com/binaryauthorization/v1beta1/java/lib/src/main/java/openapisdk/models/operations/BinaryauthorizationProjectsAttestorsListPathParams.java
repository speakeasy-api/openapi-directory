package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BinaryauthorizationProjectsAttestorsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}