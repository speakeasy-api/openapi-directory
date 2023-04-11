import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Global address autocomplete, for search-as-you-type
 */
export declare class AddressSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find Address
     *
     * @remarks
     * The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.
     *
     * This API can be used to power realtime address finders, also known as address autofill or address autocomplete.
     *
     * Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.
     *
     * ## Implementing Address Autocomplete
     *
     * Rapid address autocompletion using our Address Autocomplete API is a 2 step process.
     *
     * 1. Retrieve partial address suggestions via `/autocomplete/addresses`
     * 2. Retrieve the entire address with the ID provided in the suggestion
     *
     * Step 2 will decrement your lookup balance.
     *
     * Please note, this API is not intended to be a free standalone resource.
     *
     * ## Filters
     *
     * You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.
     *
     * If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.
     *
     * You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.
     *
     * All filters can accept multiple terms unless stated otherwise below.
     *
     * Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.
     *
     * A maximum of **10** terms are allowed across all filters.
     *
     * ## Biases
     *
     * You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.
     *
     * Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.
     *
     * For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.
     *
     * No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`
     *
     * You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.
     *
     * All biases can accept multiple terms unless stated otherwise below.
     *
     * A combined maximum of **5** terms are allowed across all biases.
     *
     * ## Suggestion Format
     *
     * The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.
     *
     * ## Rate Limiting
     *
     * You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.
     *
     * | Header                  | Description                                                                            |
     * | ----------------------- | -------------------------------------------------------------------------------------- |
     * | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
     * | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
     * | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |
     *
     * ## Pricing
     *
     * This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.
     *
     * Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.
     *
     */
    addressAutocomplete(req: operations.AddressAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.AddressAutocompleteResponse>;
    /**
     * Resolve Address (GBR)
     *
     * @remarks
     * Resolves an address autocompletion by its address ID.
     *
     * Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county).
     *
     */
    resolve(req: operations.ResolveRequest, config?: AxiosRequestConfig): Promise<operations.ResolveResponse>;
    /**
     * Resolve Address (USA)
     *
     * @remarks
     * Resolves an address autocompletion by its address ID.
     *
     * Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city).
     *
     */
    resolveUsa(req: operations.ResolveUsaRequest, config?: AxiosRequestConfig): Promise<operations.ResolveUsaResponse>;
}
