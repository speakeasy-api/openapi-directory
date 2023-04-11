import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenameVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class RenameVideoCollectionRequest extends SpeakeasyBase {
    /**
     * The new name for the collection
     */
    collectionUpdateRequest: shared.CollectionUpdateRequest;
    /**
     * The ID of the collection to rename
     */
    id: string;
}
export declare class RenameVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
