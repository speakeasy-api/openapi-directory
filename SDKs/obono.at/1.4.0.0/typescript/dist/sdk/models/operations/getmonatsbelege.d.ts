import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMonatsbelegeRequest extends SpeakeasyBase {
    month?: number;
    /**
     * The `_uuid` of the `Registrierkasse`.
     */
    registrierkasseUuid: string;
    year?: number;
}
export declare class GetMonatsbelegeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Information about `Monatsbelege`.
     */
    monatsbelegs?: shared.Monatsbeleg[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
