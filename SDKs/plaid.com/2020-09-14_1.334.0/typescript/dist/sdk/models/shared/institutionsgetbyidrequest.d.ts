import { SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { InstitutionsGetByIdRequestOptions } from "./institutionsgetbyidrequestoptions";
/**
 * InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
 */
export declare class InstitutionsGetByIdRequest extends SpeakeasyBase {
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
     * The ID of the institution to get details about
     */
    institutionId: string;
    /**
     * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
     */
    options?: InstitutionsGetByIdRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
