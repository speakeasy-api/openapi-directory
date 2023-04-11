import { SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetRequestOptions } from "./institutionsgetrequestoptions";
/**
 * InstitutionsGetRequest defines the request schema for `/institutions/get`
 */
export declare class InstitutionsGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The total number of Institutions to return.
     */
    count: number;
    /**
     * Specify an array of Plaid-supported country codes this institution supports, using the ISO-3166-1 alpha-2 country code standard.
     *
     * @remarks
     *
     * In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.
     *
     */
    countryCodes: CountryCodeEnum[];
    /**
     * The number of Institutions to skip.
     */
    offset: number;
    /**
     * An optional object to filter `/institutions/get` results.
     */
    options?: InstitutionsGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
