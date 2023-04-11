import { SpeakeasyBase } from "../../../internal/utils";
import { DsaPublicKeyInfo } from "./dsapublickeyinfo";
import { RsaPublicKeyInfo } from "./rsapublickeyinfo";
/**
 * Credential for verifying signatures produced by the Identity Provider.
 */
export declare class IdpCredential extends SpeakeasyBase {
    /**
     * Information of a DSA public key.
     */
    dsaKeyInfo?: DsaPublicKeyInfo;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential.
     */
    name?: string;
    /**
     * Information of a RSA public key.
     */
    rsaKeyInfo?: RsaPublicKeyInfo;
    /**
     * Output only. Time when the `IdpCredential` was last updated.
     */
    updateTime?: string;
}
