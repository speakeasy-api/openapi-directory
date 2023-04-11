import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CatalogCollectionRoleTypeEnum {
    User = "USER"
}
/**
 * A user that has access to a catalog collection
 */
export declare class CatalogCollectionRole extends SpeakeasyBase {
    email: string;
    id: string;
    type: CatalogCollectionRoleTypeEnum;
}
