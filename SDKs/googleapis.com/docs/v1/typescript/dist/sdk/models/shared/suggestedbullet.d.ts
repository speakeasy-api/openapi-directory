import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { BulletSuggestionState } from "./bulletsuggestionstate";
/**
 * A suggested change to a Bullet.
 */
export declare class SuggestedBullet extends SpeakeasyBase {
    /**
     * Describes the bullet of a paragraph.
     */
    bullet?: Bullet;
    /**
     * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    bulletSuggestionState?: BulletSuggestionState;
}
