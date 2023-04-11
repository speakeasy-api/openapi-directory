import { AddShortlink } from "./addshortlink";
import { AddSubaccount } from "./addsubaccount";
import { Campagne } from "./campagne";
import { Comptage } from "./comptage";
import { Credit } from "./credit";
import { DelListeNoire } from "./dellistenoire";
import { EditSubaccount } from "./editsubaccount";
import { GetListeNoire } from "./getlistenoire";
import { Hlr } from "./hlr";
import { Repertoire } from "./repertoire";
import { SetListeNoire } from "./setlistenoire";
import { Sms } from "./sms";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apirest.isendpro.com/cgi-bin", "http://apirest.isendpro.com/cgi-bin"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * [1] Liste des fonctionnalités :
 *
 * @remarks
 * - envoi de SMS à un ou plusieurs destinataires,
 * - lookup HLR,
 * - récupération des récapitulatifs de campagne,
 * - gestion des répertoires,
 * - ajout en liste noire.
 * - comptage du nombre de caractères des SMS
 *
 * [2] Pour utiliser cette API vous devez:
 * - Créer un compte iSendPro sur https://isendpro.com/
 * - Créditer votre compte
 *     - Remarque: obtention d'un crédit de test possible sous conditions
 * - Noter votre clé de compte (keyid)
 *   - Elle vous sera indispensable à l'utilisation de l'API
 *   - Vous pouvez la trouver dans le rubrique mon "compte", sous-rubrique "mon API"
 * - Configurer le contrôle IP
 *   - Le contrôle IP est configurable dans le rubrique mon "compte", sous-rubrique "mon API"
 *   - Il s'agit d'un système de liste blanche, vous devez entrer les IP utilisées pour appeler l'API
 *   - Vous pouvez également désactiver totalement le contrôle IP
 *
 */
export declare class SDK {
    addShortlink: AddShortlink;
    addSubaccount: AddSubaccount;
    campagne: Campagne;
    comptage: Comptage;
    credit: Credit;
    delListeNoire: DelListeNoire;
    editSubaccount: EditSubaccount;
    getListeNoire: GetListeNoire;
    hlr: Hlr;
    repertoire: Repertoire;
    setListeNoire: SetListeNoire;
    sms: Sms;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
