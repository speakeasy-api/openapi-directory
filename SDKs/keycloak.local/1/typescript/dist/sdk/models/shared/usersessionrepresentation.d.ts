import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserSessionRepresentation extends SpeakeasyBase {
    clients?: Record<string, any>;
    id?: string;
    ipAddress?: string;
    lastAccess?: number;
    start?: number;
    userId?: string;
    username?: string;
}
