package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BinaryauthorizationProjectsAttestorsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}