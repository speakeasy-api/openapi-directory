package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentCreateEnvironmentRequest {
    @SpeakeasyMetadata("form:name=DomainSuffix")
    public String domainSuffix;
    public CreateEnvironmentCreateEnvironmentRequest withDomainSuffix(String domainSuffix) {
        this.domainSuffix = domainSuffix;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateEnvironmentCreateEnvironmentRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}