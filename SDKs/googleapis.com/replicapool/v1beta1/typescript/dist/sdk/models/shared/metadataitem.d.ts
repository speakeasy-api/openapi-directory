import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
 */
export declare class MetadataItem extends SpeakeasyBase {
    /**
     * A metadata key.
     */
    key?: string;
    /**
     * A metadata value.
     */
    value?: string;
}
