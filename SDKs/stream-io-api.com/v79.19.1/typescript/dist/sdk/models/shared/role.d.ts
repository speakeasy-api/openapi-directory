import { SpeakeasyBase } from "../../../internal/utils";
export declare class Role extends SpeakeasyBase {
    /**
     * Date/time of creation
     */
    createdAt: Date;
    /**
     * Whether this is a custom role or built-in
     */
    custom: boolean;
    /**
     * Unique role name
     */
    name: string;
    /**
     * List of scopes where this role is currently present. `.app` means that role is present in app-level grants
     */
    scopes: string[];
    /**
     * Date/time of the last update
     */
    updatedAt: Date;
}
