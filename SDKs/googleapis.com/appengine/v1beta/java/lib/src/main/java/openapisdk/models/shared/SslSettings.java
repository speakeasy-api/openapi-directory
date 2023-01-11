package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslSettings
 * SSL configuration for a DomainMapping resource.
**/
public class SslSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public SslSettings withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingManagedCertificateId")
    public String pendingManagedCertificateId;
    public SslSettings withPendingManagedCertificateId(String pendingManagedCertificateId) {
        this.pendingManagedCertificateId = pendingManagedCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslManagementType")
    public SslSettingsSslManagementTypeEnum sslManagementType;
    public SslSettings withSslManagementType(SslSettingsSslManagementTypeEnum sslManagementType) {
        this.sslManagementType = sslManagementType;
        return this;
    }
}