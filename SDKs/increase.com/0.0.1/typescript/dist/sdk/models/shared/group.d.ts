import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the Group is allowed to create ACH debits.
 */
export declare enum GroupAchDebitStatusEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * If the Group is activated or not.
 */
export declare enum GroupActivationStatusEnum {
    Unactivated = "unactivated",
    Activated = "activated"
}
/**
 * A constant representing the object's type. For this resource it will always be `group`.
 */
export declare enum GroupTypeEnum {
    Group = "group"
}
/**
 * Groups represent organizations using Increase. You can retrieve information about your own organization via the API, or (more commonly) OAuth platforms can retrieve information about the organizations that have granted them access.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * If the Group is allowed to create ACH debits.
     */
    achDebitStatus: GroupAchDebitStatusEnum;
    /**
     * If the Group is activated or not.
     */
    activationStatus: GroupActivationStatusEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Group was created.
     */
    createdAt: Date;
    /**
     * The Group identifier.
     */
    id: string;
    /**
     * A constant representing the object's type. For this resource it will always be `group`.
     */
    type: GroupTypeEnum;
}
