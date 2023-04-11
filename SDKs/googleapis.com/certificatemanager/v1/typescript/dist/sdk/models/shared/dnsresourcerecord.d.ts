import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
 */
export declare class DnsResourceRecord extends SpeakeasyBase {
    /**
     * Output only. Data of the DNS Resource Record.
     */
    data?: string;
    /**
     * Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com`
     */
    name?: string;
    /**
     * Output only. Type of the DNS Resource Record. Currently always set to "CNAME".
     */
    type?: string;
}
