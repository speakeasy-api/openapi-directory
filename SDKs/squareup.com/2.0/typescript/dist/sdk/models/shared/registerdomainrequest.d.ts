import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the parameters that can be included in the body of
 *
 * @remarks
 * a request to the [RegisterDomain](https://developer.squareup.com/reference/square_2021-08-18/apple-pay-api/register-domain) endpoint.
 */
export declare class RegisterDomainRequest extends SpeakeasyBase {
    /**
     * A domain name as described in RFC-1034 that will be registered with ApplePay.
     */
    domainName: string;
}
