import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { ProfileRef } from "./profileref";
import { UserRef } from "./userref";
import { WebPropertyRef } from "./webpropertyref";
/**
 * Entity for this link. It can be an account, a web property, or a view (profile).
 */
export declare class EntityUserLinkEntity extends SpeakeasyBase {
    /**
     * JSON template for a linked account.
     */
    accountRef?: AccountRef;
    /**
     * JSON template for a linked view (profile).
     */
    profileRef?: ProfileRef;
    /**
     * JSON template for a web property reference.
     */
    webPropertyRef?: WebPropertyRef;
}
/**
 * Permissions the user has for this entity.
 */
export declare class EntityUserLinkPermissionsInput extends SpeakeasyBase {
    /**
     * Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
     */
    local?: string[];
}
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
 */
export declare class EntityUserLinkInput extends SpeakeasyBase {
    /**
     * Entity for this link. It can be an account, a web property, or a view (profile).
     */
    entity?: EntityUserLinkEntity;
    /**
     * Entity user link ID
     */
    id?: string;
    /**
     * Resource type for entity user link.
     */
    kind?: string;
    /**
     * Permissions the user has for this entity.
     */
    permissions?: EntityUserLinkPermissionsInput;
    /**
     * Self link for this resource.
     */
    selfLink?: string;
    /**
     * JSON template for a user reference.
     */
    userRef?: UserRef;
}
/**
 * Permissions the user has for this entity.
 */
export declare class EntityUserLinkPermissions extends SpeakeasyBase {
    /**
     * Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.
     */
    effective?: string[];
    /**
     * Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
     */
    local?: string[];
}
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
 */
export declare class EntityUserLink extends SpeakeasyBase {
    /**
     * Entity for this link. It can be an account, a web property, or a view (profile).
     */
    entity?: EntityUserLinkEntity;
    /**
     * Entity user link ID
     */
    id?: string;
    /**
     * Resource type for entity user link.
     */
    kind?: string;
    /**
     * Permissions the user has for this entity.
     */
    permissions?: EntityUserLinkPermissions;
    /**
     * Self link for this resource.
     */
    selfLink?: string;
    /**
     * JSON template for a user reference.
     */
    userRef?: UserRef;
}
