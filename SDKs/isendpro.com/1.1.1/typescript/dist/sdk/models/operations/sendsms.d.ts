import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendSmsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Dysfonctionnement
     */
    erreur?: shared.Erreur;
    /**
     * Reponse OK
     */
    smsReponse?: shared.SMSReponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
