import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEmbeddingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createEmbeddingResponse?: shared.CreateEmbeddingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
