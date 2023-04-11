import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCatalogSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCatalogRequest extends SpeakeasyBase {
    /**
     * The specific version of the catalog objects to be included in the response.
     *
     * @remarks
     * This allows you to retrieve historical
     * versions of objects. The specified version value is matched against
     * the [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s' `version` attribute.
     */
    catalogVersion?: number;
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request.
     *
     * @remarks
     * The page size is currently set to be 100.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * An optional case-insensitive, comma-separated list of object types to retrieve.
     *
     * @remarks
     *
     * The valid values are defined in the [CatalogObjectType](https://developer.squareup.com/reference/square_2021-08-18/enums/CatalogObjectType) enum, including
     * `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
     * `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
     *
     * If this is unspecified, the operation returns objects of all the types at the version of the Square API used to make the request.
     */
    types?: string;
}
export declare class ListCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCatalogResponse?: shared.ListCatalogResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
