import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Campagne {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCampagne - Retourne les SMS envoyés sur une période donnée
     *
     * Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin.
     *
     * Les dates sont au format YYYY-MM-DD hh:mm.
     *
     * Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
     *
    **/
    getCampagne(req: operations.GetCampagneRequest, config?: AxiosRequestConfig): Promise<operations.GetCampagneResponse>;
}
