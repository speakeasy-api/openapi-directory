import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Doit valoir "1"
 */
export declare enum SetListeNoireSetlisteNoireEnum {
    One = "1"
}
export declare class SetListeNoireRequest extends SpeakeasyBase {
    /**
     * Clé API
     */
    keyid: string;
    /**
     * numéro de mobile à insérer en liste noire
     */
    num: string;
    /**
     * Doit valoir "1"
     */
    setlisteNoire: SetListeNoireSetlisteNoireEnum;
}
export declare class SetListeNoireResponse extends SpeakeasyBase {
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
