package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageSystemsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeRhIdentity rhIdentity;
    public PackageSystemsSecurity withRhIdentity(openapisdk.models.shared.SchemeRhIdentity rhIdentity) {
        this.rhIdentity = rhIdentity;
        return this;
    }
}