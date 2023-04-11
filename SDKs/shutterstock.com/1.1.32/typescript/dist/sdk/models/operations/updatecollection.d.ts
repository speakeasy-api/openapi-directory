import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class UpdateCollectionRequest extends SpeakeasyBase {
    /**
     * Collections Metadata to update
     */
    updateCatalogCollection: shared.UpdateCatalogCollection;
    /**
     * ID of collection that needs to be modified
     */
    collectionId: string;
}
export declare class UpdateCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollection?: shared.CatalogCollection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
