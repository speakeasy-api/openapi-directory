package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationBySubjectAndAssocTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=association_type")
    public String associationType;
    public GetAssociationBySubjectAndAssocTypePathParams withAssociationType(String associationType) {
        this.associationType = associationType;
        return this;
    }
}