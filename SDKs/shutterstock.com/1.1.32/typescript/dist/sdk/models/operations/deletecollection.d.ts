import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteCollectionRequest extends SpeakeasyBase {
    /**
     * The ID of the collection to delete
     */
    collectionId: string;
}
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
