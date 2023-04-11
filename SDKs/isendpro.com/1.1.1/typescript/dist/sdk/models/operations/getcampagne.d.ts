import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Doit valoir "1"
 */
export declare enum GetCampagneRapportCampagneEnum {
    One = "1"
}
export declare class GetCampagneRequest extends SpeakeasyBase {
    /**
     * date de debut au format YYYY-MM-DD hh:mm
     */
    dateDeb: string;
    /**
     * date de fin au format YYYY-MM-DD hh:mm
     */
    dateFin: string;
    /**
     * Clé API
     */
    keyid: string;
    /**
     * Doit valoir "1"
     */
    rapportCampagne: GetCampagneRapportCampagneEnum;
}
export declare class GetCampagneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Erreur
     */
    erreur?: shared.Erreur;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getCampagne200ApplicationJSONBinaryString?: Uint8Array;
    /**
     * Successful response
     */
    getCampagne200FileBinaryString?: Uint8Array;
}
