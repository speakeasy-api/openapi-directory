import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://apirest.isendpro.com/cgi-bin", "http://apirest.isendpro.com/cgi-bin"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
