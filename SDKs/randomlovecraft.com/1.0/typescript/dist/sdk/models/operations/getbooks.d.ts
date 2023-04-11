import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBooks200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Book[];
}
export declare class GetBooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getBooks200ApplicationJSONObject?: GetBooks200ApplicationJSON;
}
