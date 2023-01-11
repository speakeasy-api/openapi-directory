package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate[] certificates;
    public ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse withCertificates(openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta meta;
    public ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse withMeta(ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}