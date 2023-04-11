import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Database } from "./googlefirestoreadminv1database";
/**
 * The list of databases for a project.
 */
export declare class GoogleFirestoreAdminV1ListDatabasesResponse extends SpeakeasyBase {
    /**
     * The databases in the project.
     */
    databases?: GoogleFirestoreAdminV1Database[];
}
