import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * Successful response
 */
export declare class ListRolesResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    roles: Role[];
}
