import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class Import extends SpeakeasyBase {
    /**
     * Datetime of when the import was created
     */
    createdAt?: Date;
    /**
     * Count of People that have not been deleted
     */
    currentPeopleCount?: number;
    /**
     * Import ID
     */
    id?: number;
    /**
     * Count of People that have ever been on this Import
     */
    importedPeopleCount?: number;
    /**
     * Name of Import
     */
    name?: string;
    /**
     * Datetime of when the import was last updated, ignoring relationship changes
     */
    updatedAt?: Date;
}
