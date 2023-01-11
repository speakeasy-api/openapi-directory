import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to change fields of a JWT token
**/
export declare class MappingSettings extends SpeakeasyBase {
    map: Record<string, string>;
    remove: string[];
    values: Record<string, string>;
}
