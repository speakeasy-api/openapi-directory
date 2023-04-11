import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDocumentsRequest extends SpeakeasyBase {
    fields?: string;
    limit?: string;
    offset?: string;
}
export declare class GetDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
