import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The producer representation of a catalog which is a curated collection of
 *
 * @remarks
 * solutions that can be managed, controlled, and shared by cloud admins.
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1Catalog extends SpeakeasyBase {
    /**
     * Output only. The time when the catalog was created.
     */
    createTime?: string;
    /**
     * Required. The user-supplied description of the catalog. Maximum of 512
     *
     * @remarks
     * characters.
     */
    description?: string;
    /**
     * Required. The user-supplied descriptive name of the catalog as it appears
     *
     * @remarks
     * in UIs. Maximum 256 characters in length.
     */
    displayName?: string;
    /**
     * Output only. The resource name of the catalog, in the format
     *
     * @remarks
     * `catalogs/{catalog_id}'.
     *
     * A unique identifier for the catalog, which is generated
     * by catalog service.
     */
    name?: string;
    /**
     * Required. The parent resource name of the catalog, which can't be changed
     *
     * @remarks
     * after a catalog is created. It can only be an organization. Values are of
     * the form `//cloudresourcemanager.googleapis.com/organizations/<id>`.
     * Maximum 256 characters in length.
     */
    parent?: string;
    /**
     * Output only. The time when the catalog was last updated.
     */
    updateTime?: string;
}
