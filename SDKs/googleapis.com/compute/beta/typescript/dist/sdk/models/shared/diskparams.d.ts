import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional disk params.
 */
export declare class DiskParams extends SpeakeasyBase {
    /**
     * Resource manager tags to be bound to the disk. Tag keys and values have the same definition as resource manager tags. Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. The field is ignored (both PUT & PATCH) when empty.
     */
    resourceManagerTags?: Record<string, string>;
}
