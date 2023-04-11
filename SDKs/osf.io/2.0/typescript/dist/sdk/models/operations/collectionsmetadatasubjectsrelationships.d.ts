import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsMetadataSubjectsRelationshipsRequest extends SpeakeasyBase {
    /**
     * A short id for that piece of metadata
     */
    cgmId: string;
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsMetadataSubjectsRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
