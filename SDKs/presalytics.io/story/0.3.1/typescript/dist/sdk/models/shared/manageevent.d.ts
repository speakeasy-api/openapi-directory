import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManageEventActionEnum {
    Create = "create",
    Fire = "fire",
    Change = "change",
    Delete = "delete"
}
/**
 * Collaborator user id and permission type
 */
export declare class ManageEvent extends SpeakeasyBase {
    action?: ManageEventActionEnum;
    actionParams?: Record<string, any>;
    name?: string;
}
