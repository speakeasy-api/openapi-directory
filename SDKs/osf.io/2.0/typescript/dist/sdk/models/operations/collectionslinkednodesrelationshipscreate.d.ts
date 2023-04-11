import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsLinkedNodesRelationshipsCreateRequest extends SpeakeasyBase {
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsLinkedNodesRelationshipsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
