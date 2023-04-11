import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStatsTotalRequest extends SpeakeasyBase {
    /**
     * The end date for this total (in millis)
     */
    end?: number;
    /**
     * A comma seperated list of all the fields to be returned in the total (available by default: dislikes, likes, reviews, totalSales, developerSales, marketplaceSales, downloads, ownerships, views)
     */
    fields: string;
    /**
     * A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112
     */
    query?: string;
    /**
     * The start date for this total (in millis)
     */
    start?: number;
}
export declare class GetStatsTotalResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
