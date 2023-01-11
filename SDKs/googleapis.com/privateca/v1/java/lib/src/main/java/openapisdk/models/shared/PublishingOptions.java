package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishingOptions
 * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
**/
public class PublishingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishCaCert")
    public Boolean publishCaCert;
    public PublishingOptions withPublishCaCert(Boolean publishCaCert) {
        this.publishCaCert = publishCaCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishCrl")
    public Boolean publishCrl;
    public PublishingOptions withPublishCrl(Boolean publishCrl) {
        this.publishCrl = publishCrl;
        return this;
    }
}