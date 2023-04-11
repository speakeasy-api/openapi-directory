import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransformInputRequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class TransformInputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
