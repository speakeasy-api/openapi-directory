import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { UserTitleEnum } from "./usertitleenum";
export declare class User extends SpeakeasyBase {
    changed?: Date;
    changedBy?: ChangedBy;
    email?: string;
    id?: string;
    isActive?: boolean;
    isAdmin?: boolean;
    isBillingAdmin?: boolean;
    name?: string;
    title?: UserTitleEnum;
}
