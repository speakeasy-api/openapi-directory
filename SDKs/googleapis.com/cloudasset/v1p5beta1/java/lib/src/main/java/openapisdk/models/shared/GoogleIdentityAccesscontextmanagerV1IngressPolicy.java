package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1IngressPolicy
 * Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.
**/
public class GoogleIdentityAccesscontextmanagerV1IngressPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressFrom")
    public GoogleIdentityAccesscontextmanagerV1IngressFrom ingressFrom;
    public GoogleIdentityAccesscontextmanagerV1IngressPolicy withIngressFrom(GoogleIdentityAccesscontextmanagerV1IngressFrom ingressFrom) {
        this.ingressFrom = ingressFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressTo")
    public GoogleIdentityAccesscontextmanagerV1IngressTo ingressTo;
    public GoogleIdentityAccesscontextmanagerV1IngressPolicy withIngressTo(GoogleIdentityAccesscontextmanagerV1IngressTo ingressTo) {
        this.ingressTo = ingressTo;
        return this;
    }
}