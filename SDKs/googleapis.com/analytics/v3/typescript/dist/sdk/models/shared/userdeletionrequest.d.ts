import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User ID.
 */
export declare class UserDeletionRequestId extends SpeakeasyBase {
    /**
     * Type of user
     */
    type?: string;
    /**
     * The User's id
     */
    userId?: string;
}
/**
 * JSON template for a user deletion request resource.
 */
export declare class UserDeletionRequestInput extends SpeakeasyBase {
    /**
     * Firebase Project Id
     */
    firebaseProjectId?: string;
    /**
     * User ID.
     */
    id?: UserDeletionRequestId;
    /**
     * Value is "analytics#userDeletionRequest".
     */
    kind?: string;
    /**
     * Property ID
     */
    propertyId?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    webPropertyId?: string;
}
/**
 * JSON template for a user deletion request resource.
 */
export declare class UserDeletionRequest extends SpeakeasyBase {
    /**
     * This marks the point in time for which all user data before should be deleted
     */
    deletionRequestTime?: Date;
    /**
     * Firebase Project Id
     */
    firebaseProjectId?: string;
    /**
     * User ID.
     */
    id?: UserDeletionRequestId;
    /**
     * Value is "analytics#userDeletionRequest".
     */
    kind?: string;
    /**
     * Property ID
     */
    propertyId?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    webPropertyId?: string;
}
