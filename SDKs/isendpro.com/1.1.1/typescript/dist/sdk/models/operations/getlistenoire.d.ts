import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Doit valoir "1"
 */
export declare enum GetListeNoireGetListeNoireEnum {
    One = "1"
}
export declare class GetListeNoireRequest extends SpeakeasyBase {
    /**
     * Doit valoir "1"
     */
    getListeNoire: GetListeNoireGetListeNoireEnum;
    /**
     * Clé API
     */
    keyid: string;
}
export declare class GetListeNoireResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getListeNoire200ApplicationJSONBinaryString?: Uint8Array;
}
