import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Aggregate2RequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessageList;
}
export declare class Aggregate2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
