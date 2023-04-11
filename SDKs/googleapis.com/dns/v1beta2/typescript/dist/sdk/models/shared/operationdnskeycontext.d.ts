import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKey } from "./dnskey";
export declare class OperationDnsKeyContext extends SpeakeasyBase {
    /**
     * A DNSSEC key pair.
     */
    newValue?: DnsKey;
    /**
     * A DNSSEC key pair.
     */
    oldValue?: DnsKey;
}
