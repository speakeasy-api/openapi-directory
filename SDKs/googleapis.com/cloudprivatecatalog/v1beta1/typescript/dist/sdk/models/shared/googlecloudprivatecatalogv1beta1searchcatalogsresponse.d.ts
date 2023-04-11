import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Catalog } from "./googlecloudprivatecatalogv1beta1catalog";
/**
 * Response message for PrivateCatalog.SearchCatalogs.
 */
export declare class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse extends SpeakeasyBase {
    /**
     * The `Catalog`s computed from the resource context.
     */
    catalogs?: GoogleCloudPrivatecatalogV1beta1Catalog[];
    /**
     * A pagination token returned from a previous call to SearchCatalogs that
     *
     * @remarks
     * indicates from where listing should continue.
     * This field is optional.
     */
    nextPageToken?: string;
}
