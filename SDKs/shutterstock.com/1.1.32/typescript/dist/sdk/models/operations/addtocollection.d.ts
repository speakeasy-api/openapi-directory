import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddToCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class AddToCollectionRequest extends SpeakeasyBase {
    /**
     * Collection item attributes to add to collection
     */
    createCatalogCollectionItems: shared.CreateCatalogCollectionItems;
    /**
     * The ID of the collection to add assets to
     */
    collectionId: string;
}
export declare class AddToCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollection?: shared.CatalogCollection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
