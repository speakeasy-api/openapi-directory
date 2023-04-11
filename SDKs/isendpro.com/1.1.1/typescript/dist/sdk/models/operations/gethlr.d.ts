import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHlrResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Dysfonctionnement
     */
    erreur?: shared.Erreur;
    /**
     * Reponse OK
     */
    hlrReponse?: shared.HLRReponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
