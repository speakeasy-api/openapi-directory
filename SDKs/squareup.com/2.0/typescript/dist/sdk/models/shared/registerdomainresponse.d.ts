import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
 *
 * Either `errors` or `status` are present in a given response (never both).
 */
export declare class RegisterDomainResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The status of the domain registration.
     *
     * @remarks
     *
     * See [RegisterDomainResponseStatus](https://developer.squareup.com/reference/square_2021-08-18/enums/RegisterDomainResponseStatus) for possible values.
     */
    status?: string;
}
