import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddShortlinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Dysfonctionnement
     */
    erreur?: shared.Erreur;
    /**
     * Reponse OK
     */
    shortlinkResponse?: shared.ShortlinkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
