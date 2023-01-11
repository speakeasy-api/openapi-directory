package openapisdk.models.operations;



public class SecuritycenterProjectsBigQueryExportsCreateResponse {
    public String contentType;
    public SecuritycenterProjectsBigQueryExportsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1BigQueryExport googleCloudSecuritycenterV1BigQueryExport;
    public SecuritycenterProjectsBigQueryExportsCreateResponse withGoogleCloudSecuritycenterV1BigQueryExport(openapisdk.models.shared.GoogleCloudSecuritycenterV1BigQueryExport googleCloudSecuritycenterV1BigQueryExport) {
        this.googleCloudSecuritycenterV1BigQueryExport = googleCloudSecuritycenterV1BigQueryExport;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsBigQueryExportsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}