import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
/**
 * Publisher Dynamic Tag
 */
export declare class FloodlightActivityPublisherDynamicTag extends SpeakeasyBase {
    /**
     * Whether this tag is applicable only for click-throughs.
     */
    clickThrough?: boolean;
    /**
     * Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
     */
    directorySiteId?: string;
    /**
     * Dynamic Tag
     */
    dynamicTag?: FloodlightActivityDynamicTag;
    /**
     * Site ID of this dynamic tag.
     */
    siteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    siteIdDimensionValue?: DimensionValue;
    /**
     * Whether this tag is applicable only for view-throughs.
     */
    viewThrough?: boolean;
}
