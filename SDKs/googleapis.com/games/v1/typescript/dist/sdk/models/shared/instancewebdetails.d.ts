import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Web details resource.
 */
export declare class InstanceWebDetails extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`.
     */
    kind?: string;
    /**
     * Launch URL for the game.
     */
    launchUrl?: string;
    /**
     * Indicates that this instance is the default for new installations.
     */
    preferred?: boolean;
}
