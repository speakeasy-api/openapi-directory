package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCourseMappingsExternalcourseExternalCourseIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalCourseId")
    public String externalCourseId;
    public GetCourseMappingsExternalcourseExternalCourseIdPathParams withExternalCourseId(String externalCourseId) {
        this.externalCourseId = externalCourseId;
        return this;
    }
}