import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueSize } from "./targetingvaluesize";
/**
 * Next Id: 7
 */
export declare class TargetingValueCreativeSize extends SpeakeasyBase {
    /**
     * The formats allowed by the publisher.
     */
    allowedFormats?: string[];
    /**
     * For video size type, the list of companion sizes.
     */
    companionSizes?: TargetingValueSize[];
    /**
     * The Creative size type.
     */
    creativeSizeType?: string;
    /**
     * The native template for native ad.
     */
    nativeTemplate?: string;
    size?: TargetingValueSize;
    /**
     * The skippable ad type for video size.
     */
    skippableAdType?: string;
}
