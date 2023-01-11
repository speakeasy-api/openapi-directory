package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attestor")
    public String attestor;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams withAttestor(String attestor) {
        this.attestor = attestor;
        return this;
    }
}