import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapVolumeSource } from "./configmapvolumesource";
import { SecretVolumeSource } from "./secretvolumesource";
/**
 * Volume represents a named volume in a container.
 */
export declare class Volume extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
     */
    configMap?: ConfigMapVolumeSource;
    /**
     * Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved.
     */
    name?: string;
    /**
     * A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
     */
    secret?: SecretVolumeSource;
}
