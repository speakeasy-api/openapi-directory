import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchInIndex1RequestBody extends SpeakeasyBase {
    attributesToHighlight?: string[];
    q?: string;
}
export declare class SearchInIndex1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
