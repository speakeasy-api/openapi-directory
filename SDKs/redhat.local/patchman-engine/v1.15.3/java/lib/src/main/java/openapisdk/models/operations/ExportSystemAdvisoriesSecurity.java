package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemAdvisoriesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeRhIdentity rhIdentity;
    public ExportSystemAdvisoriesSecurity withRhIdentity(openapisdk.models.shared.SchemeRhIdentity rhIdentity) {
        this.rhIdentity = rhIdentity;
        return this;
    }
}