import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransformOutputRequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class TransformOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
