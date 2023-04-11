import { SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentation } from "./rolerepresentation";
/**
 * success
 */
export declare class MappingsRepresentation extends SpeakeasyBase {
    clientMappings?: Record<string, any>;
    realmMappings?: RoleRepresentation[];
}
