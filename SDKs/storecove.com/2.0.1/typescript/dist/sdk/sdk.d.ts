import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Administrations } from "./administrations";
import { Discovery } from "./discovery";
import { DocumentSubmissions } from "./documentsubmissions";
import { InvoiceSubmissions } from "./invoicesubmissions";
import { LegalEntities } from "./legalentities";
import { PeppolIdentifiers } from "./peppolidentifiers";
import { PurchaseInvoices } from "./purchaseinvoices";
import { WebhookInstances } from "./webhookinstances";
export declare const ServerList: readonly ["https://api.storecove.com/api/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    administrations: Administrations;
    discovery: Discovery;
    documentSubmissions: DocumentSubmissions;
    invoiceSubmissions: InvoiceSubmissions;
    legalEntities: LegalEntities;
    peppolIdentifiers: PeppolIdentifiers;
    purchaseInvoices: PurchaseInvoices;
    webhookInstances: WebhookInstances;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
