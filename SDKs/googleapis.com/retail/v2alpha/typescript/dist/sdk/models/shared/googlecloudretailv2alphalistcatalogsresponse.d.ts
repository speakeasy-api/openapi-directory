import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalog } from "./googlecloudretailv2alphacatalog";
/**
 * Response for CatalogService.ListCatalogs method.
 */
export declare class GoogleCloudRetailV2alphaListCatalogsResponse extends SpeakeasyBase {
    /**
     * All the customer's Catalogs.
     */
    catalogs?: GoogleCloudRetailV2alphaCatalog[];
    /**
     * A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
