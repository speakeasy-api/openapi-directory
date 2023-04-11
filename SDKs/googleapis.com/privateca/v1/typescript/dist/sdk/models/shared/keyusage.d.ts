import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedKeyUsageOptions } from "./extendedkeyusageoptions";
import { KeyUsageOptions } from "./keyusageoptions";
import { ObjectId } from "./objectid";
/**
 * A KeyUsage describes key usage values that may appear in an X.509 certificate.
 */
export declare class KeyUsage extends SpeakeasyBase {
    /**
     * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
     */
    baseKeyUsage?: KeyUsageOptions;
    /**
     * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
     */
    extendedKeyUsage?: ExtendedKeyUsageOptions;
    /**
     * Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
     */
    unknownExtendedKeyUsages?: ObjectId[];
}
