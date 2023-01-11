package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemPackagesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeRhIdentity rhIdentity;
    public ExportSystemPackagesSecurity withRhIdentity(openapisdk.models.shared.SchemeRhIdentity rhIdentity) {
        this.rhIdentity = rhIdentity;
        return this;
    }
}