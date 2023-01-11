import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Repertoire {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * repertoire - Gestion repertoire (modification)
     *
     * Ajoute ou supprime une liste de numéros à un répertoire existant.
    **/
    repertoire(req: operations.RepertoireRequest, config?: AxiosRequestConfig): Promise<operations.RepertoireResponse>;
    /**
     * repertoireCrea - Gestion repertoire (creation)
     *
     * Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
    **/
    repertoireCrea(req: operations.RepertoireCreaRequest, config?: AxiosRequestConfig): Promise<operations.RepertoireCreaResponse>;
}
