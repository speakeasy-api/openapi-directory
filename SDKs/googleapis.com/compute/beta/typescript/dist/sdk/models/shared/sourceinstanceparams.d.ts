import { SpeakeasyBase } from "../../../internal/utils";
import { DiskInstantiationConfig } from "./diskinstantiationconfig";
/**
 * A specification of the parameters to use when creating the instance template from a source instance.
 */
export declare class SourceInstanceParams extends SpeakeasyBase {
    /**
     * Attached disks configuration. If not provided, defaults are applied: For boot disk and any other R/W disks, the source images for each disk will be used. For read-only disks, they will be attached in read-only mode. Local SSD disks will be created as blank volumes.
     */
    diskConfigs?: DiskInstantiationConfig[];
}
