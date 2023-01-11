package openapisdk.models.operations;



public class DriveFilesListLabelsResponse {
    public String contentType;
    public DriveFilesListLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabelList labelList;
    public DriveFilesListLabelsResponse withLabelList(openapisdk.models.shared.LabelList labelList) {
        this.labelList = labelList;
        return this;
    }
    public Long statusCode;
    public DriveFilesListLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}