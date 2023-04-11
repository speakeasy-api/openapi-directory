import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OriginSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class OriginRequest extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class OriginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    firstLastNameOriginedOut?: shared.FirstLastNameOriginedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
