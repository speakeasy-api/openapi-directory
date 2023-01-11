package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAdministrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateAdministrationPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=legal_entity_id")
    public Long legalEntityId;
    public UpdateAdministrationPathParams withLegalEntityId(Long legalEntityId) {
        this.legalEntityId = legalEntityId;
        return this;
    }
}