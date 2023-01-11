package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IstioCanonicalService
 * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
**/
public class IstioCanonicalService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalService")
    public String canonicalService;
    public IstioCanonicalService withCanonicalService(String canonicalService) {
        this.canonicalService = canonicalService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalServiceNamespace")
    public String canonicalServiceNamespace;
    public IstioCanonicalService withCanonicalServiceNamespace(String canonicalServiceNamespace) {
        this.canonicalServiceNamespace = canonicalServiceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshUid")
    public String meshUid;
    public IstioCanonicalService withMeshUid(String meshUid) {
        this.meshUid = meshUid;
        return this;
    }
}