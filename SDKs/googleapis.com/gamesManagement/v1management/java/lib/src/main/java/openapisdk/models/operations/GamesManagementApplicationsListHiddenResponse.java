package openapisdk.models.operations;



public class GamesManagementApplicationsListHiddenResponse {
    public String contentType;
    public GamesManagementApplicationsListHiddenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HiddenPlayerList hiddenPlayerList;
    public GamesManagementApplicationsListHiddenResponse withHiddenPlayerList(openapisdk.models.shared.HiddenPlayerList hiddenPlayerList) {
        this.hiddenPlayerList = hiddenPlayerList;
        return this;
    }
    public Long statusCode;
    public GamesManagementApplicationsListHiddenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}