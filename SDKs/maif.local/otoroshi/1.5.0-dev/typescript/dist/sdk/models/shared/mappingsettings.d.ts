import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to change fields of a JWT token
 */
export declare class MappingSettings extends SpeakeasyBase {
    /**
     * Fields to rename
     */
    map: Record<string, string>;
    /**
     * Fields to remove
     */
    remove: string[];
    /**
     * Fields to set
     */
    values: Record<string, string>;
}
