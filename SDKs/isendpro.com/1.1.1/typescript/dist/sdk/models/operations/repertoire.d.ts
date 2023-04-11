import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RepertoireResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    /**
     * Successful response
     */
    repertoirEmodifreponse?: shared.REPERTOIREmodifreponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
