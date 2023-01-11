package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCourseMappingsOfferingIdExternalCourseIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalCourseId")
    public String externalCourseId;
    public PutCourseMappingsOfferingIdExternalCourseIdPathParams withExternalCourseId(String externalCourseId) {
        this.externalCourseId = externalCourseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PutCourseMappingsOfferingIdExternalCourseIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}