import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Keystore configuration as JSON
 */
export declare class KeyStoreConfig extends SpeakeasyBase {
    format?: string;
    keyAlias?: string;
    keyPassword?: string;
    realmAlias?: string;
    realmCertificate?: boolean;
    storePassword?: string;
}
