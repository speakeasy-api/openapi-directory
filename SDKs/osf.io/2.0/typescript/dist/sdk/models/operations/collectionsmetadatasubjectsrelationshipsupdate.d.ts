import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsMetadataSubjectsRelationshipsUpdateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * A short id for that piece of metadata
     */
    cgmId: string;
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsMetadataSubjectsRelationshipsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
