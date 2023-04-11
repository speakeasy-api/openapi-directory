import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTenantTenantnameRequest extends SpeakeasyBase {
    /**
     * The tenant ID integrated in the `sub` property.
     */
    tenantname: string;
}
/**
 * OK
 */
export declare class GetTenantTenantname200ApplicationJSON extends SpeakeasyBase {
    /**
     * The URL of the tenant's JSON representation.
     */
    atId?: string;
    /**
     * A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description.
     */
    about?: string;
    /**
     * The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links.
     */
    attribution?: string;
    /**
     * It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
     *
     * @remarks
     * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.
     *
     * The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
     * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
     */
    depot?: string;
    /**
     * A list of resource types supported by the external CSV set in `depot`.
     */
    depots?: any[];
    /**
     * True in the case of a domain tenant collecting several tenants, otherwise false.
     */
    domain?: boolean;
    /**
     * A list of resource types supported by the external generator set in `factory`.
     */
    factories?: any[];
    /**
     * The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
     *
     * @remarks
     * The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.
     */
    factory?: string;
    /**
     * The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.
     */
    favicon?: string;
    /**
     * The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     *
     * @remarks
     * As a webpage, it contains information on the use if the given tenant.
     */
    issuer: string;
    /**
     * The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants.
     */
    logo?: string;
    /**
     * The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages.
     */
    name?: string;
    /**
     * The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages.
     */
    script?: string;
    /**
     * It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.
     *
     * @remarks
     * In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).
     */
    sheet?: string;
    /**
     * The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).
     */
    sub: string;
    /**
     * True in the case of a tenant referred to in a domain tenant, otherwise false.
     */
    subtenant?: boolean;
    /**
     * A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text.
     */
    summary?: string;
    /**
     * It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.
     *
     * @remarks
     * The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.
     */
    template?: string;
    /**
     * The URL of the CSS style sheet used for the tenant's webpages.
     *
     * @remarks
     * The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.
     */
    theme?: string;
    userinfo?: string;
    /**
     * The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property.
     */
    website?: string;
}
export declare class GetTenantTenantnameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getTenantTenantname200ApplicationJSONObject?: GetTenantTenantname200ApplicationJSON;
}
