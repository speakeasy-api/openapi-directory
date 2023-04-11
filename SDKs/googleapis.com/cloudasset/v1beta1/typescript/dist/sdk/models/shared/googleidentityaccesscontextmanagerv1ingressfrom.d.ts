import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1IngressSource } from "./googleidentityaccesscontextmanagerv1ingresssource";
/**
 * Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access.
 */
export declare enum GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED",
    AnyIdentity = "ANY_IDENTITY",
    AnyUserAccount = "ANY_USER_ACCOUNT",
    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}
/**
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
 */
export declare class GoogleIdentityAccesscontextmanagerV1IngressFrom extends SpeakeasyBase {
    /**
     * A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only.
     */
    identities?: string[];
    /**
     * Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access.
     */
    identityType?: GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum;
    /**
     * Sources that this IngressPolicy authorizes access from.
     */
    sources?: GoogleIdentityAccesscontextmanagerV1IngressSource[];
}
