import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Configuration information for a Kerberos principal.
 */
export declare class KerberosConfig extends SpeakeasyBase {
    /**
     * A securely stored value.
     */
    keytab?: Secret;
    /**
     * A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
     */
    krb5ConfigGcsUri?: string;
    /**
     * A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format.
     */
    principal?: string;
}
