package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentaryFromEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CommentaryId")
    public String commentaryId;
    public GetCommentaryFromEmployeePathParams withCommentaryId(String commentaryId) {
        this.commentaryId = commentaryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetCommentaryFromEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCommentaryFromEmployeePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}