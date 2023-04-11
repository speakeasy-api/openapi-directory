import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the `ImportDomain` method.
 */
export declare class ImportDomainRequest extends SpeakeasyBase {
    /**
     * Required. The domain name. Unicode domain names must be expressed in Punycode format.
     */
    domainName?: string;
    /**
     * Set of labels associated with the `Registration`.
     */
    labels?: Record<string, string>;
}
