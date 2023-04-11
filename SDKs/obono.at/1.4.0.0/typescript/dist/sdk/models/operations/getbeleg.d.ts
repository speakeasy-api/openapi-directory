import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBelegRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of the `Beleg` to fetch.
     */
    belegUuid: string;
    /**
     * The `_uuid` of the `Registrierkasse` that contains the requested `Beleg`.
     */
    registrierkasseUuid: string;
}
export declare class GetBelegResponse extends SpeakeasyBase {
    /**
     * The requested `Beleg` resource.
     */
    beleg?: shared.Beleg;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
