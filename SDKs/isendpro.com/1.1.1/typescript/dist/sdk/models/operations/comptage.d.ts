import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComptageResponse extends SpeakeasyBase {
    /**
     * Reponse OK
     */
    comptageReponse?: shared.ComptageReponse;
    contentType: string;
    /**
     * Dysfonctionnement
     */
    erreur?: shared.Erreur;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
