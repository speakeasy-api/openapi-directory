import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1IngressFrom } from "./googleidentityaccesscontextmanagerv1ingressfrom";
import { GoogleIdentityAccesscontextmanagerV1IngressTo } from "./googleidentityaccesscontextmanagerv1ingressto";
/**
 * Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.
 */
export declare class GoogleIdentityAccesscontextmanagerV1IngressPolicy extends SpeakeasyBase {
    /**
     * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
     */
    ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;
    /**
     * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
     */
    ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
}
