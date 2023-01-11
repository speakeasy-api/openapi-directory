import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListApplicationQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class ListApplicationRequest extends SpeakeasyBase {
    queryParams: ListApplicationQueryParams;
}
export declare class ListApplicationResponse extends SpeakeasyBase {
    applicationResponseCollection?: any;
    contentType: string;
    statusCode: number;
    listApplication400ApplicationJSONAny?: any;
    listApplication401ApplicationJSONAny?: any;
    listApplication405ApplicationJSONAny?: any;
    listApplication406ApplicationJSONAny?: any;
}
