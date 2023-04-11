import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ReconfigureTrust
 */
export declare class ReconfigureTrustRequest extends SpeakeasyBase {
    /**
     * Required. The target DNS server IP addresses to resolve the remote domain involved in the trust.
     */
    targetDnsIpAddresses?: string[];
    /**
     * Required. The fully-qualified target domain name which will be in trust with current domain.
     */
    targetDomainName?: string;
}
