import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Version object
 */
export declare class Version extends SpeakeasyBase {
    /**
     * Dubbed name of version
     */
    codename?: string;
    /**
     * Semantic Version to use as the base fork
     */
    from: string;
    isBeta?: boolean;
    /**
     * Should this be deprecated? Only allowed in PUT operations
     */
    isDeprecated?: boolean;
    /**
     * Should this be publically accessible?
     */
    isHidden?: boolean;
    /**
     * Should this be the **main** version
     */
    isStable?: boolean;
    /**
     * Semantic Version
     */
    version: string;
}
