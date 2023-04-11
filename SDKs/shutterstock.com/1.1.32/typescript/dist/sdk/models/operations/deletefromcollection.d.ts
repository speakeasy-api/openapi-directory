import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteFromCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteFromCollectionRequest extends SpeakeasyBase {
    /**
     * Items to remove from the collection
     */
    removeCatalogCollectionItems: shared.RemoveCatalogCollectionItems;
    /**
     * The ID of the collection to remove assets from
     */
    collectionId: string;
}
export declare class DeleteFromCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollection?: shared.CatalogCollection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
