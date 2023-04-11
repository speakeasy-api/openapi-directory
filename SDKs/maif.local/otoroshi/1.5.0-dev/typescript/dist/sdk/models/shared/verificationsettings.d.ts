import { SpeakeasyBase } from "../../../internal/utils";
import { MappingSettings } from "./mappingsettings";
/**
 * Settings to verify the value of JWT token fields
 */
export declare class VerificationSettings extends SpeakeasyBase {
    /**
     * Fields to verify with their values
     */
    fields: Record<string, string>;
    /**
     * Settings to change fields of a JWT token
     */
    mappingSettings?: MappingSettings;
}
