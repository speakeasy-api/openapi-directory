import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";
/**
 * The metagame config resource
 */
export declare class MetagameConfig extends SpeakeasyBase {
    /**
     * Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
     */
    currentVersion?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`.
     */
    kind?: string;
    /**
     * The list of player levels.
     */
    playerLevels?: PlayerLevel[];
}
