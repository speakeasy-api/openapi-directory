package openapisdk.models.operations;



public class GetTargetsTargetIdFindingsIdResponse {
    public String contentType;
    public GetTargetsTargetIdFindingsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Finding finding;
    public GetTargetsTargetIdFindingsIdResponse withFinding(openapisdk.models.shared.Finding finding) {
        this.finding = finding;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdFindingsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdFindingsId401ApplicationJson getTargetsTargetIdFindingsId401ApplicationJSONObject;
    public GetTargetsTargetIdFindingsIdResponse withGetTargetsTargetIdFindingsId401ApplicationJsonObject(GetTargetsTargetIdFindingsId401ApplicationJson getTargetsTargetIdFindingsId401ApplicationJSONObject) {
        this.getTargetsTargetIdFindingsId401ApplicationJSONObject = getTargetsTargetIdFindingsId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdFindingsId404ApplicationJson getTargetsTargetIdFindingsId404ApplicationJSONObject;
    public GetTargetsTargetIdFindingsIdResponse withGetTargetsTargetIdFindingsId404ApplicationJsonObject(GetTargetsTargetIdFindingsId404ApplicationJson getTargetsTargetIdFindingsId404ApplicationJSONObject) {
        this.getTargetsTargetIdFindingsId404ApplicationJSONObject = getTargetsTargetIdFindingsId404ApplicationJSONObject;
        return this;
    }
}