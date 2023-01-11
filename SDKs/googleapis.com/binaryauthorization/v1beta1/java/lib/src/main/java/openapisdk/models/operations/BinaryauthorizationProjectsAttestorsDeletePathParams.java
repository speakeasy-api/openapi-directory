package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BinaryauthorizationProjectsAttestorsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}