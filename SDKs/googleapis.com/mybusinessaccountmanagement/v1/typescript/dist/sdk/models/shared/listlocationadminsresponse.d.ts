import { SpeakeasyBase } from "../../../internal/utils";
import { Admin } from "./admin";
/**
 * Response message for AccessControl.ListLocationAdmins.
 */
export declare class ListLocationAdminsResponse extends SpeakeasyBase {
    /**
     * A collection of Admins.
     */
    admins?: Admin[];
}
