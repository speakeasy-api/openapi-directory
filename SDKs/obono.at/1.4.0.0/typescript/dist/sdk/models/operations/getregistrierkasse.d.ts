import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegistrierkasseRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of a particular `Registrierkasse` to fetch.
     */
    registrierkasseUuid: string;
}
export declare class GetRegistrierkasseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Information about a particular `Registrierkasse`.
     */
    registrierkasse?: shared.Registrierkasse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
