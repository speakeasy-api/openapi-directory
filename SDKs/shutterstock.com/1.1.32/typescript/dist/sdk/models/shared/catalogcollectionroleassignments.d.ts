import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCollectionRole } from "./catalogcollectionrole";
export declare class CatalogCollectionRoleAssignmentsRoles extends SpeakeasyBase {
    editors?: CatalogCollectionRole[];
    owners?: CatalogCollectionRole[];
    viewers?: CatalogCollectionRole[];
}
/**
 * List of role assignments for a catalog collection
 */
export declare class CatalogCollectionRoleAssignments extends SpeakeasyBase {
    collectionId: string;
    roles: CatalogCollectionRoleAssignmentsRoles;
}
