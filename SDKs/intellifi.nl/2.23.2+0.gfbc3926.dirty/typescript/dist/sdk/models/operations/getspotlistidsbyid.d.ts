import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpotListIdsByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetSpotListIdsByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array object containing the item ids for this list
     */
    listOfItemIds?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
