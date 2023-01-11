package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationBySubjectCategorySearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject_category")
    public String subjectCategory;
    public GetAssociationBySubjectCategorySearchPathParams withSubjectCategory(String subjectCategory) {
        this.subjectCategory = subjectCategory;
        return this;
    }
}