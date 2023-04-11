import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsMetadataRegistrationsListRequest extends SpeakeasyBase {
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsMetadataRegistrationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
