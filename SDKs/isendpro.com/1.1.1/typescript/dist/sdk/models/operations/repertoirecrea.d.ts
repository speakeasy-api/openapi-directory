import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RepertoireCreaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    /**
     * Successful response
     */
    repertoirEcreatereponse?: shared.REPERTOIREcreatereponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
