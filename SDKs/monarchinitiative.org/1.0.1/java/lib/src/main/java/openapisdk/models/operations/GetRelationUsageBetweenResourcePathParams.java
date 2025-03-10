package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationUsageBetweenResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object_category")
    public String objectCategory;
    public GetRelationUsageBetweenResourcePathParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject_category")
    public String subjectCategory;
    public GetRelationUsageBetweenResourcePathParams withSubjectCategory(String subjectCategory) {
        this.subjectCategory = subjectCategory;
        return this;
    }
}