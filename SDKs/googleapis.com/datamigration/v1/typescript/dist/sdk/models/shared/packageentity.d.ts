import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Package's parent is a schema.
 */
export declare class PackageEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory.
     */
    packageBody?: string;
    /**
     * The SQL code which creates the package.
     */
    packageSqlCode?: string;
}
