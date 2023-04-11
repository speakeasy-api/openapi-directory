import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateFacetingRequestBody extends SpeakeasyBase {
    maxValuesPerFacet?: number;
}
export declare class UpdateFacetingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
