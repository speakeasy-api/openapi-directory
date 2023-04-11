import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Doit valoir "1"
 */
export declare enum DelListeNoireDelListeNoireEnum {
    One = "1"
}
export declare class DelListeNoireRequest extends SpeakeasyBase {
    /**
     * Doit valoir "1"
     */
    delListeNoire: DelListeNoireDelListeNoireEnum;
    /**
     * Clé API
     */
    keyid: string;
    /**
     * numéro de mobile à supprimer
     */
    num: string;
}
export declare class DelListeNoireResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    /**
     * Successful response
     */
    listenoireReponse?: shared.LISTENOIREReponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
