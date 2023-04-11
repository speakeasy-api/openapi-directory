import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A restriction for accessing the content of the file.
 */
export declare class ContentRestriction extends SpeakeasyBase {
    /**
     * Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.
     */
    readOnly?: boolean;
    /**
     * Reason for why the content of the file is restricted. This is only mutable on requests that also set readOnly=true.
     */
    reason?: string;
    /**
     * Information about a Drive user.
     */
    restrictingUser?: User;
    /**
     * The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
     */
    restrictionDate?: Date;
    /**
     * The type of the content restriction. Currently the only possible value is globalContentRestriction.
     */
    type?: string;
}
