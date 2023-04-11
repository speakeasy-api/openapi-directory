import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenameImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class RenameImageCollectionRequest extends SpeakeasyBase {
    /**
     * The new name for the collection
     */
    collectionUpdateRequest: shared.CollectionUpdateRequest;
    /**
     * Collection ID
     */
    id: string;
}
export declare class RenameImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
