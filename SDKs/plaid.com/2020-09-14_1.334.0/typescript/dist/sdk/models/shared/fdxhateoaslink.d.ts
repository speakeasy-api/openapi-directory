import { SpeakeasyBase } from "../../../internal/utils";
import { FDXContentTypesEnum } from "./fdxcontenttypesenum";
import { FDXHateoasLinkActionEnum } from "./fdxhateoaslinkactionenum";
/**
 * REST application constraint (Hypermedia As The Engine Of Application State)
 */
export declare class FDXHateoasLink extends SpeakeasyBase {
    /**
     * HTTP Method to use for the request
     */
    action?: FDXHateoasLinkActionEnum;
    /**
     * URL to invoke the action on the resource
     */
    href: string;
    /**
     * Relation of this link to its containing entity, as defined by and with many example relation values at [IETF RFC5988](https://datatracker.ietf.org/doc/html/rfc5988)
     */
    rel?: string;
    /**
     * Content-types that can be used in the Accept header
     */
    types?: FDXContentTypesEnum[];
}
