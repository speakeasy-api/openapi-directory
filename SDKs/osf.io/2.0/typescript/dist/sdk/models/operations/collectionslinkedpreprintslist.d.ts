import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsLinkedPreprintsListRequest extends SpeakeasyBase {
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsLinkedPreprintsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
