package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BinaryauthorizationProjectsAttestorsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}