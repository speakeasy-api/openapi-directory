import { SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";
/**
 * Instances ListServerCas response.
 */
export declare class InstancesListServerCasResponse extends SpeakeasyBase {
    activeVersion?: string;
    /**
     * List of server CA certificates for the instance.
     */
    certs?: SslCert[];
    /**
     * This is always `sql#instancesListServerCas`.
     */
    kind?: string;
}
