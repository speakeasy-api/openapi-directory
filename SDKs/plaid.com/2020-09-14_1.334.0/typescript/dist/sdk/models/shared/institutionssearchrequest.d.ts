import { SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsSearchRequestOptions } from "./institutionssearchrequestoptions";
import { ProductsEnum } from "./productsenum";
/**
 * InstitutionsSearchRequest defines the request schema for `/institutions/search`
 */
export declare class InstitutionsSearchRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Specify an array of Plaid-supported country codes this institution supports, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.
     *
     * @remarks
     *
     */
    countryCodes: CountryCodeEnum[];
    /**
     * An optional object to filter `/institutions/search` results.
     */
    options?: InstitutionsSearchRequestOptions;
    /**
     * Filter the Institutions based on whether they support all products listed in `products`. Provide `null` to get institutions regardless of supported products. Note that when `auth` is specified as a product, if you are enabled for Instant Match or Automated Micro-deposits, institutions that support those products will be returned even if `auth` is not present in their product array.
     */
    products: ProductsEnum[];
    /**
     * The search query. Institutions with names matching the query are returned
     */
    query: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
