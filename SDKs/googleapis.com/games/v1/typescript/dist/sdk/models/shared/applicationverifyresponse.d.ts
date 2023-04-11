import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A third party application verification response resource.
 */
export declare class ApplicationVerifyResponse extends SpeakeasyBase {
    /**
     * An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)
     */
    alternatePlayerId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`.
     */
    kind?: string;
    /**
     * The ID of the player that was issued the auth token used in this request.
     */
    playerId?: string;
}
