import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectionsLinkedRegistrationsListRequest extends SpeakeasyBase {
    /**
     * A short id for that collection
     */
    collectionId: string;
}
export declare class CollectionsLinkedRegistrationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
