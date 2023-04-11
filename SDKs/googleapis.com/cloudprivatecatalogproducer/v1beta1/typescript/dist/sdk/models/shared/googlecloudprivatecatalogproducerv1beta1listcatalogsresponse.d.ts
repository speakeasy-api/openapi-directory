import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Catalog } from "./googlecloudprivatecatalogproducerv1beta1catalog";
/**
 * Successful response
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse extends SpeakeasyBase {
    /**
     * The `Catalogs` returned from the list call.
     */
    catalogs?: GoogleCloudPrivatecatalogproducerV1beta1Catalog[];
    /**
     * A pagination token returned from a previous call to ListCatalogs
     *
     * @remarks
     * that indicates where the listing should continue from.
     * This field is optional.
     */
    nextPageToken?: string;
}
