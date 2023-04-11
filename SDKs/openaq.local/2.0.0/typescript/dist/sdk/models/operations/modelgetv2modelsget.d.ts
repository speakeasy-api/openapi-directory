import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ModelGetV2ModelsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    openAQResult?: shared.OpenAQResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
