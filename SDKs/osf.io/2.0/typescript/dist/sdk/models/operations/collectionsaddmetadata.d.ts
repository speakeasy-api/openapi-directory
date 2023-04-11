import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsAddMetadataRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsAddMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
