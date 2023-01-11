package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VaccineStatusRequest {
    @JsonProperty("Documento")
    public String documento;
    public VaccineStatusRequest withDocumento(String documento) {
        this.documento = documento;
        return this;
    }
}