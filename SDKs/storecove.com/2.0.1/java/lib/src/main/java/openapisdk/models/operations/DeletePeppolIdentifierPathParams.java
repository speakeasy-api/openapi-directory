package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePeppolIdentifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=identifier")
    public String identifier;
    public DeletePeppolIdentifierPathParams withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=legal_entity_id")
    public Long legalEntityId;
    public DeletePeppolIdentifierPathParams withLegalEntityId(Long legalEntityId) {
        this.legalEntityId = legalEntityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheme")
    public String scheme;
    public DeletePeppolIdentifierPathParams withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=superscheme")
    public String superscheme;
    public DeletePeppolIdentifierPathParams withSuperscheme(String superscheme) {
        this.superscheme = superscheme;
        return this;
    }
}