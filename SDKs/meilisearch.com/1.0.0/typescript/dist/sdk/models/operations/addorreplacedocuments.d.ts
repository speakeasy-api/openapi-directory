import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddOrReplaceDocumentsRequestBody extends SpeakeasyBase {
    author?: string;
    genre?: string;
    id?: number;
    price?: number;
    title?: string;
}
export declare class AddOrReplaceDocumentsRequest extends SpeakeasyBase {
    requestBody?: AddOrReplaceDocumentsRequestBody[];
    primaryKey?: string;
}
export declare class AddOrReplaceDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
