import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the Membership resource.
 */
export declare class MembershipStateInput extends SpeakeasyBase {
    /**
     * This field is never set by the Hub Service.
     */
    description?: string;
    /**
     * This field is never set by the Hub Service.
     */
    updateTime?: string;
}
/**
 * Output only. The current state of the Membership resource.
 */
export declare enum MembershipStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}
/**
 * State of the Membership resource.
 */
export declare class MembershipState extends SpeakeasyBase {
    /**
     * Output only. The current state of the Membership resource.
     */
    code?: MembershipStateCodeEnum;
    /**
     * This field is never set by the Hub Service.
     */
    description?: string;
    /**
     * This field is never set by the Hub Service.
     */
    updateTime?: string;
}
