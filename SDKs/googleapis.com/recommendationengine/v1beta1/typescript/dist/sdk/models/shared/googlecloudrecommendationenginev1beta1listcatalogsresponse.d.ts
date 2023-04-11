import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1Catalog } from "./googlecloudrecommendationenginev1beta1catalog";
/**
 * Response for ListCatalogs method.
 */
export declare class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse extends SpeakeasyBase {
    /**
     * Output only. All the customer's catalogs.
     */
    catalogs?: GoogleCloudRecommendationengineV1beta1Catalog[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
