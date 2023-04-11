import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité
 */
export declare enum GetCreditCreditEnum {
    One = "1",
    Two = "2"
}
export declare class GetCreditRequest extends SpeakeasyBase {
    /**
     * Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité
     */
    credit: GetCreditCreditEnum;
    /**
     * Clé API
     */
    keyid: string;
}
export declare class GetCreditResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    creditResponse?: shared.CreditResponse;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
