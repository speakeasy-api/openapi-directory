import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddBelegRequest extends SpeakeasyBase {
    /**
     * An object that contains all data for a particular `Beleg` and is formatted according to RKSV "Signaturformat".
     */
    belegdaten: shared.Belegdaten;
    /**
     * The `_uuid` of the `Beleg` to store.
     */
    belegUuid: string;
    /**
     * The `_uuid` of the `Registrierkasse` to use for signing data.
     */
    registrierkasseUuid: string;
}
export declare class AddBelegResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
