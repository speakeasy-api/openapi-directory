import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Primary scoped player identifier for an application.
 */
export declare class ApplicationPlayerId extends SpeakeasyBase {
    /**
     * The application that this player identifier is for.
     */
    applicationId?: string;
    /**
     * The player identifier for the application.
     */
    playerId?: string;
}
