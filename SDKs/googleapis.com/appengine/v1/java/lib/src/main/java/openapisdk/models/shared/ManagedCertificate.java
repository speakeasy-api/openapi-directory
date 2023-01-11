package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedCertificate
 * A certificate managed by App Engine.
**/
public class ManagedCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRenewalTime")
    public String lastRenewalTime;
    public ManagedCertificate withLastRenewalTime(String lastRenewalTime) {
        this.lastRenewalTime = lastRenewalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ManagedCertificateStatusEnum status;
    public ManagedCertificate withStatus(ManagedCertificateStatusEnum status) {
        this.status = status;
        return this;
    }
}