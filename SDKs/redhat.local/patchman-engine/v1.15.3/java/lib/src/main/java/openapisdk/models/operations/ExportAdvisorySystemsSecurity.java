package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAdvisorySystemsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeRhIdentity rhIdentity;
    public ExportAdvisorySystemsSecurity withRhIdentity(openapisdk.models.shared.SchemeRhIdentity rhIdentity) {
        this.rhIdentity = rhIdentity;
        return this;
    }
}