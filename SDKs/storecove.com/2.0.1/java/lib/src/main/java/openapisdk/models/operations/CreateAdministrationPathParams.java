package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdministrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=legal_entity_id")
    public Long legalEntityId;
    public CreateAdministrationPathParams withLegalEntityId(Long legalEntityId) {
        this.legalEntityId = legalEntityId;
        return this;
    }
}