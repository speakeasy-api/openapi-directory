package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeRhIdentity rhIdentity;
    public ExportSystemsSecurity withRhIdentity(openapisdk.models.shared.SchemeRhIdentity rhIdentity) {
        this.rhIdentity = rhIdentity;
        return this;
    }
}