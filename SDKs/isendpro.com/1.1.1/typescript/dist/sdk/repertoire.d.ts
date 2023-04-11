import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Repertoire {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gestion repertoire (modification)
     *
     * @remarks
     * Ajoute ou supprime une liste de numéros à un répertoire existant.
     */
    repertoire(req: shared.REPERTOIREmodifrequest, config?: AxiosRequestConfig): Promise<operations.RepertoireResponse>;
    /**
     * Gestion repertoire (creation)
     *
     * @remarks
     * Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
     */
    repertoireCrea(req: shared.REPERTOIREcreaterequest, config?: AxiosRequestConfig): Promise<operations.RepertoireCreaResponse>;
}
