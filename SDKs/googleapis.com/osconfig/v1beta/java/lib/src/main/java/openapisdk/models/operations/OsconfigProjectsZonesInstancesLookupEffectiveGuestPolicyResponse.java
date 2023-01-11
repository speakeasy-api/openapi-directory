package openapisdk.models.operations;



public class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse {
    public String contentType;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EffectiveGuestPolicy effectiveGuestPolicy;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse withEffectiveGuestPolicy(openapisdk.models.shared.EffectiveGuestPolicy effectiveGuestPolicy) {
        this.effectiveGuestPolicy = effectiveGuestPolicy;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}