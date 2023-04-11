import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapEnvSource } from "./configmapenvsource";
import { SecretEnvSource } from "./secretenvsource";
/**
 * Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps
 */
export declare class EnvFromSource extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
     */
    configMapRef?: ConfigMapEnvSource;
    /**
     * (Optional) An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     */
    prefix?: string;
    /**
     * Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
     */
    secretRef?: SecretEnvSource;
}
