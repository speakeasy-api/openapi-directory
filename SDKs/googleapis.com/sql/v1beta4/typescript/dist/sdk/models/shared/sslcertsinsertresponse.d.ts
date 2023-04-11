import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
import { SslCert } from "./sslcert";
import { SslCertDetail } from "./sslcertdetail";
/**
 * SslCert insert response.
 */
export declare class SslCertsInsertResponse extends SpeakeasyBase {
    /**
     * SslCertDetail.
     */
    clientCert?: SslCertDetail;
    /**
     * This is always `sql#sslCertsInsert`.
     */
    kind?: string;
    /**
     * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
     */
    operation?: Operation;
    /**
     * SslCerts Resource
     */
    serverCaCert?: SslCert;
}
