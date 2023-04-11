import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCatalogObjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteCatalogObjectRequest extends SpeakeasyBase {
    /**
     * The ID of the catalog object to be deleted. When an object is deleted, other
     *
     * @remarks
     * objects in the graph that depend on that object will be deleted as well (for example, deleting a
     * catalog item will delete its catalog item variations).
     */
    objectId: string;
}
export declare class DeleteCatalogObjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCatalogObjectResponse?: shared.DeleteCatalogObjectResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
