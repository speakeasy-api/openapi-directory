import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Class for the Put action of an Access Token
 */
export declare class AccessTokenToPut extends SpeakeasyBase {
    /**
     * The ID of the Card
     */
    cardId?: number;
    /**
     * The ID of the User. The credentials provided must have permission to edit the user.
     *
     * @remarks
     *             If no ID is provided, the user in the credentials is taken.
     */
    userId?: number;
}
