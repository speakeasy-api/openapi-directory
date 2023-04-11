import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindPetsByTagsRequest extends SpeakeasyBase {
    /**
     * Tags to filter by
     */
    cardId: string;
}
export declare class FindPetsByTagsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    card?: shared.Card;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
