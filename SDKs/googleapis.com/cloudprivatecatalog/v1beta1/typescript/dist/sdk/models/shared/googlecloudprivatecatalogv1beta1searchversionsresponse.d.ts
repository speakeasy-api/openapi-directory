import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Version } from "./googlecloudprivatecatalogv1beta1version";
/**
 * Response message for PrivateCatalog.SearchVersions.
 */
export declare class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to SearchVersions that
     *
     * @remarks
     * indicates from where the listing should continue.
     * This field is optional.
     */
    nextPageToken?: string;
    /**
     * The `Version` resources computed from the resource context.
     */
    versions?: GoogleCloudPrivatecatalogV1beta1Version[];
}
