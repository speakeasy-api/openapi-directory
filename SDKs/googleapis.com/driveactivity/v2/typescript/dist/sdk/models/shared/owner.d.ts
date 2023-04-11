import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { DriveReference } from "./drivereference";
import { TeamDriveReference } from "./teamdrivereference";
import { User } from "./user";
/**
 * Information about the owner of a Drive item.
 */
export declare class Owner extends SpeakeasyBase {
    /**
     * Information about a domain.
     */
    domain?: Domain;
    /**
     * A lightweight reference to a shared drive.
     */
    drive?: DriveReference;
    /**
     * This item is deprecated; please see `DriveReference` instead.
     */
    teamDrive?: TeamDriveReference;
    /**
     * Information about an end user.
     */
    user?: User;
}
