import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubaccountEditResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Dysfonctionnement
     */
    erreur?: shared.Erreur;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Reponse OK
     */
    subaccountResponse?: shared.SubaccountResponse;
}
