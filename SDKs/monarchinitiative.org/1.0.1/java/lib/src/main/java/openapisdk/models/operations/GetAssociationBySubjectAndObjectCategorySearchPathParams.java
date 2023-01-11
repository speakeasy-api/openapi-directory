package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationBySubjectAndObjectCategorySearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object_category")
    public String objectCategory;
    public GetAssociationBySubjectAndObjectCategorySearchPathParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject_category")
    public String subjectCategory;
    public GetAssociationBySubjectAndObjectCategorySearchPathParams withSubjectCategory(String subjectCategory) {
        this.subjectCategory = subjectCategory;
        return this;
    }
}