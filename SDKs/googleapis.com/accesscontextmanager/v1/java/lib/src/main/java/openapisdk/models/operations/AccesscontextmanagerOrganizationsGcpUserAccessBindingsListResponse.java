package openapisdk.models.operations;



public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse {
    public String contentType;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGcpUserAccessBindingsResponse listGcpUserAccessBindingsResponse;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse withListGcpUserAccessBindingsResponse(openapisdk.models.shared.ListGcpUserAccessBindingsResponse listGcpUserAccessBindingsResponse) {
        this.listGcpUserAccessBindingsResponse = listGcpUserAccessBindingsResponse;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}