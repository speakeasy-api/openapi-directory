import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapKeySelector } from "./configmapkeyselector";
import { SecretKeySelector } from "./secretkeyselector";
/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export declare class EnvVarSource extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run.
     */
    configMapKeyRef?: ConfigMapKeySelector;
    /**
     * SecretKeySelector selects a key of a Secret.
     */
    secretKeyRef?: SecretKeySelector;
}
