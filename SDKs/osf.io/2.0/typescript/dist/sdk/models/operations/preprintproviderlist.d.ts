import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the preprint provider entity.
 */
export declare class PreprintProviderListPreprintProvidersAttributes extends SpeakeasyBase {
    /**
     * The HTML representation of the preprint provider's advisory board.
     */
    advisoryBoard?: string;
    /**
     * A static path to the preprint provider's banner image. This field is deprecated as of verson 2.4.
     */
    bannerPath?: string;
    /**
     * The description of the preprint provider.
     */
    description?: string;
    /**
     * The preprint provider's domain, if the provider is using a domain to for their preprint service.
     */
    domain?: string;
    /**
     * Whether or not redirects are enabled for the provider's domain.
     */
    domainRedirectEnabled?: boolean;
    /**
     * The preprint provider's contact email address. This field is deprecated as of verson 2.4.
     */
    emailContact?: string;
    /**
     * The preprint providers's support email address.
     */
    emailSupport?: string;
    /**
     * The GUID for an example preprint from this preprint provider.
     */
    example?: string;
    /**
     * A static path to the preprint provider's logo image. This field is deprecated as of verson 2.4.
     */
    logoPath?: string;
    /**
     * The name of the preprint provider.
     */
    name?: string;
    /**
     * The preprint provider's Facebook account ID. This field is deprecated as of verson 2.4.
     */
    socialFacebook?: string;
    /**
     * The preprint provider's Instagram account ID. This field is deprecated as of verson 2.4.
     */
    socialInstagram?: string;
    /**
     * A nested array structure defining allowed subjects for this preprint provider, in the BePress taxonomy.
     */
    subjectsAcceptable?: string;
}
/**
 * Links to alternative representations of the preprint entity.
 */
export declare class PreprintProviderListPreprintProvidersLinks extends SpeakeasyBase {
    /**
     * A link to the external website for the preprint provider.
     */
    externalUrl?: string;
    /**
     * A link to the preprint list page for the preprint provider.
     */
    preprints?: string;
    /**
     * A link to the detail page for the preprint provider.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the preprint provider.
 */
export declare class PreprintProviderListPreprintProvidersRelationships extends SpeakeasyBase {
    /**
     * A link to licenses the preprint provider allows.
     */
    licensesAcceptable?: string;
    /**
     * A link to the preprint list page for the preprint provider.
     */
    preprints?: string;
    /**
     * A link to the taxonomies the preprint provider allows.
     */
    taxonomies?: string;
}
/**
 * OK
 */
export declare class PreprintProviderListPreprintProviders extends SpeakeasyBase {
    /**
     * The properties of the preprint provider entity.
     */
    attributes?: PreprintProviderListPreprintProvidersAttributes;
    /**
     * The identifier of the preprint provider entity.
     */
    id?: string;
    /**
     * Links to alternative representations of the preprint entity.
     */
    links?: PreprintProviderListPreprintProvidersLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the preprint provider.
     */
    relationships?: PreprintProviderListPreprintProvidersRelationships;
    /**
     * The type identifier of the preprint provider entity (`preprint_providers`).
     */
    type?: string;
}
export declare class PreprintProviderListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
