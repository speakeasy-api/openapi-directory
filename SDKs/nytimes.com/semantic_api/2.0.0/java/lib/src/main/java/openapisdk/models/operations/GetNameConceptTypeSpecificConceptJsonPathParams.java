package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNameConceptTypeSpecificConceptJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=concept-type")
    public GetNameConceptTypeSpecificConceptJsonConceptTypeEnum conceptType;
    public GetNameConceptTypeSpecificConceptJsonPathParams withConceptType(GetNameConceptTypeSpecificConceptJsonConceptTypeEnum conceptType) {
        this.conceptType = conceptType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=specific-concept")
    public String specificConcept;
    public GetNameConceptTypeSpecificConceptJsonPathParams withSpecificConcept(String specificConcept) {
        this.specificConcept = specificConcept;
        return this;
    }
}