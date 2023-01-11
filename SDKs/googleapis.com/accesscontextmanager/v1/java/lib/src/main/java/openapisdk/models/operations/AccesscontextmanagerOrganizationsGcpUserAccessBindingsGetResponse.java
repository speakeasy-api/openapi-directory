package openapisdk.models.operations;



public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse {
    public String contentType;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GcpUserAccessBinding gcpUserAccessBinding;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse withGcpUserAccessBinding(openapisdk.models.shared.GcpUserAccessBinding gcpUserAccessBinding) {
        this.gcpUserAccessBinding = gcpUserAccessBinding;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}