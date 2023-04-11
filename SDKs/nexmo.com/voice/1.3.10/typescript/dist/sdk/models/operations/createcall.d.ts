import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCallSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateCallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createCallResponse?: shared.CreateCallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
