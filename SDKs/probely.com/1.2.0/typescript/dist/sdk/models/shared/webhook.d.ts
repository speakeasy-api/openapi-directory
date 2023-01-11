import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookApiVersionEnum } from "./webhookapiversionenum";
import { ChangedBy } from "./changedby";
export declare class Webhook extends SpeakeasyBase {
    apiVersion?: WebhookApiVersionEnum;
    changed?: Date;
    changedBy?: ChangedBy;
    checkCert?: boolean;
    created?: Date;
    createdBy?: ChangedBy;
    id?: string;
    name?: string;
    url: string;
}
export declare class WebhookInput extends SpeakeasyBase {
    apiVersion?: WebhookApiVersionEnum;
    checkCert?: boolean;
    name?: string;
    url: string;
}
