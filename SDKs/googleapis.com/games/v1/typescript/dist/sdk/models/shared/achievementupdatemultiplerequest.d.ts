import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateRequest } from "./achievementupdaterequest";
/**
 * A list of achievement update requests.
 */
export declare class AchievementUpdateMultipleRequest extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`.
     */
    kind?: string;
    /**
     * The individual achievement update requests.
     */
    updates?: AchievementUpdateRequest[];
}
