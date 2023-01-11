package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTheRelativesOfAnEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=relation")
    public FindTheRelativesOfAnEntityRelationEnum relation;
    public FindTheRelativesOfAnEntityPathParams withRelation(FindTheRelativesOfAnEntityRelationEnum relation) {
        this.relation = relation;
        return this;
    }
}