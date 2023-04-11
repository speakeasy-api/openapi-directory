import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateDocumentsRequestBody extends SpeakeasyBase {
    author?: string;
    date?: string;
    id?: number;
}
export declare class AddOrUpdateDocumentsRequest extends SpeakeasyBase {
    requestBody?: AddOrUpdateDocumentsRequestBody[];
    primaryKey?: string;
}
export declare class AddOrUpdateDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
