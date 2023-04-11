import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETPathwaysWithDiagramsForCategoryUsingGETRequest extends SpeakeasyBase {
    /**
     * Pathway Category
     */
    category: string;
}
export declare class GETPathwaysWithDiagramsForCategoryUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
