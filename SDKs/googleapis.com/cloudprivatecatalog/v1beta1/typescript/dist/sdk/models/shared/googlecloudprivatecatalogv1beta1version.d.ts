import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The consumer representation of a version which is a child resource under a
 *
 * @remarks
 * `Product` with asset data.
 */
export declare class GoogleCloudPrivatecatalogV1beta1Version extends SpeakeasyBase {
    /**
     * Output only. The asset which has been validated and is ready to be
     *
     * @remarks
     * provisioned. See
     * google.cloud.privatecatalogproducer.v1beta.Version.asset for details.
     */
    asset?: Record<string, any>;
    /**
     * Output only. The time when the version was created.
     */
    createTime?: string;
    /**
     * Output only. The user-supplied description of the version. Maximum of 256
     *
     * @remarks
     * characters.
     */
    description?: string;
    /**
     * Output only. The resource name of the version, in the format
     *
     * @remarks
     * `catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.
     *
     * A unique identifier for the version under a product.
     */
    name?: string;
    /**
     * Output only. The time when the version was last updated.
     */
    updateTime?: string;
}
