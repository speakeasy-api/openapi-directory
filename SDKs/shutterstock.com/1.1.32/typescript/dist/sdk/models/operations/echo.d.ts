import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EchoRequest extends SpeakeasyBase {
    /**
     * Text to echo
     */
    text?: string;
}
export declare class EchoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testEcho?: shared.TestEcho;
}
