import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a change that a user has made to a resource.
 */
export declare class ChangeLog extends SpeakeasyBase {
    /**
     * Account ID of the modified object.
     */
    accountId?: string;
    /**
     * Action which caused the change.
     */
    action?: string;
    changeTime?: Date;
    /**
     * Field name of the object which changed.
     */
    fieldName?: string;
    /**
     * ID of this change log.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
     */
    kind?: string;
    /**
     * New value of the object field.
     */
    newValue?: string;
    /**
     * ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
     */
    objectId?: string;
    /**
     * Object type of the change log.
     */
    objectType?: string;
    /**
     * Old value of the object field.
     */
    oldValue?: string;
    /**
     * Subaccount ID of the modified object.
     */
    subaccountId?: string;
    /**
     * Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.
     */
    transactionId?: string;
    /**
     * ID of the user who modified the object.
     */
    userProfileId?: string;
    /**
     * User profile name of the user who modified the object.
     */
    userProfileName?: string;
}
