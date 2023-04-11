import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCatalogObjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCatalogObjectRequest extends SpeakeasyBase {
    /**
     * Requests objects as of a specific version of the catalog. This allows you to retrieve historical
     *
     * @remarks
     * versions of objects. The value to retrieve a specific version of an object can be found
     * in the version field of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s.
     */
    catalogVersion?: number;
    /**
     * If `true`, the response will include additional objects that are related to the
     *
     * @remarks
     * requested object, as follows:
     *
     * If the `object` field of the response contains a `CatalogItem`, its associated
     * `CatalogCategory`, `CatalogTax`, `CatalogImage` and `CatalogModifierList` objects will
     * be returned in the `related_objects` field of the response. If the `object` field of
     * the response contains a `CatalogItemVariation`, its parent `CatalogItem` will be returned
     * in the `related_objects` field of the response.
     *
     * Default value: `false`
     */
    includeRelatedObjects?: boolean;
    /**
     * The object ID of any type of catalog objects to be retrieved.
     */
    objectId: string;
}
export declare class RetrieveCatalogObjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCatalogObjectResponse?: shared.RetrieveCatalogObjectResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
