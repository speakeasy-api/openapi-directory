import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAbschlussRequest extends SpeakeasyBase {
    /**
     * An object that contains all data for a particular `Abschlussbeleg`.
     */
    abschlussbelegdaten: shared.Abschlussbelegdaten;
    /**
     * The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
     */
    registrierkasseUuid: string;
}
export declare class CreateAbschlussResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
