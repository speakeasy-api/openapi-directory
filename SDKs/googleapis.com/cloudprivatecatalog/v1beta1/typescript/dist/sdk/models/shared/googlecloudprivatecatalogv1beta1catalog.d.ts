import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The readonly representation of a catalog computed with a given resource
 *
 * @remarks
 * context.
 */
export declare class GoogleCloudPrivatecatalogV1beta1Catalog extends SpeakeasyBase {
    /**
     * Output only. The time when the catalog was created.
     */
    createTime?: string;
    /**
     * Output only. The description of the catalog.
     */
    description?: string;
    /**
     * Output only. The descriptive name of the catalog as it appears in UIs.
     */
    displayName?: string;
    /**
     * Output only. The resource name of the target catalog, in the format of
     *
     * @remarks
     * `catalogs/{catalog_id}'.
     */
    name?: string;
    /**
     * Output only. The time when the catalog was last updated.
     */
    updateTime?: string;
}
